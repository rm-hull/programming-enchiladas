import { Octokit } from "@octokit/rest";
import fs from "fs/promises";
import path from "path";
import * as yaml from "js-yaml";

const GH_TOKEN = process.env.GH_TOKEN;
const octokit = new Octokit({ auth: GH_TOKEN });

async function fetchGists() {
  const fileContents = await fs.readFile("../gists.yaml", "utf8");
  const data = yaml.load(fileContents);

  const demosDir = "../demos";
  await fs.mkdir(demosDir, { recursive: true });

  for (const demo of data.demos) {
    const slug = `${demo.owner}-${demo.gist_id}`;
    console.log(`Processing: ${slug}`);

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

      // Save content
      for (const [filename, file] of Object.entries(gist.files)) {
        // Simple heuristic: if it's cljs, save as source.cljs
        if (filename.endsWith(".cljs")) {
          await fs.writeFile(path.join(demoDir, "source.cljs"), file.content);
        }
      }
      
      console.log(`Successfully fetched ${slug}`);
    } catch (error) {
      console.error(`Failed to fetch ${slug}: ${error.message}`);
      await fs.writeFile(
        path.join(demoDir, "meta.json"),
        JSON.stringify({ ...demo, broken: true, error: error.message }, null, 2)
      );
    }
  }
}

fetchGists().catch(console.error);
