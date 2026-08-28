import { Octokit } from "@octokit/rest";
import fs from "fs/promises";
import path from "path";
import * as yaml from "js-yaml";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });
dotenv.config();

const GH_TOKEN = process.env.GH_TOKEN;
const octokit = new Octokit({ auth: GH_TOKEN });

async function fetchGists() {
  const fileContents = await fs.readFile("../gists.yaml", "utf8");
  const data = yaml.load(fileContents);

  const demosDir = "../demos";
  await fs.mkdir(demosDir, { recursive: true });

  console.log(chalk.cyan.bold(`\nFetching ${data.demos.length} demos from GitHub Gists...\n`));

  let successCount = 0;
  let failCount = 0;

  for (const demo of data.demos) {
    const slug = `${demo.owner}-${demo.gist_id}`;
    process.stdout.write(chalk.blue(`Processing: ${slug} (${demo.title})... `));

    const demoDir = path.join(demosDir, slug);
    await fs.mkdir(demoDir, { recursive: true });

    try {
      const { data: gist } = await octokit.gists.get({ gist_id: demo.gist_id });
      
      // Save meta
      await fs.writeFile(
        path.join(demoDir, "meta.json"),
        JSON.stringify({
          ...demo,
          gist_meta: {
            description: gist.description,
            files: Object.keys(gist.files),
            created_at: gist.created_at,
          },
        }, null, 2)
      );

      // Save all cljs files with their original filenames
      const cljsFiles = [];
      for (const [filename, file] of Object.entries(gist.files)) {
        if (filename.endsWith(".cljs")) {
          await fs.writeFile(path.join(demoDir, filename), file.content);
          cljsFiles.push(filename);
        }
      }

      if (cljsFiles.length > 0) {
        const entryFile = demo.entry_file && cljsFiles.includes(demo.entry_file) 
          ? demo.entry_file 
          : cljsFiles[0];
        const content = await fs.readFile(path.join(demoDir, entryFile), "utf8");
        await fs.writeFile(path.join(demoDir, "source.cljs"), content);
      }
      
      successCount++;
      console.log(chalk.green(`✔ OK`) + chalk.gray(` [files: meta.json, ${cljsFiles.join(", ")}` + (cljsFiles.includes("source.cljs") ? "" : ", source.cljs") + `]`));
    } catch (error) {
      failCount++;
      console.log(chalk.red(`✘ FAILED`));
      console.log(chalk.red(`  └─ Error: ${error.message}`));
      await fs.writeFile(
        path.join(demoDir, "meta.json"),
        JSON.stringify({ ...demo, broken: true, error: error.message }, null, 2)
      );
    }
  }

  console.log(chalk.cyan.bold(`\nFetch complete!`));
  console.log(chalk.green(`  Successful: ${successCount}`));
  if (failCount > 0) {
    console.log(chalk.red(`  Failed (marked broken): ${failCount}`));
  }
  console.log();
}

fetchGists().catch(console.error);
