
$(document).ready(function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/clojure");
    editor.setFontSize(14);
    editor.setShowInvisibles(false);
    editor.setShowFoldWidgets(false);
    editor.setDisplayIndentGuides(true);

    var $spinner = $('#spinner');

    var $compile = $("#compile");
    $compile.bind('click', function(event) {
        if (!$spinner.is(':visible')) {
            editor.setReadOnly(true);
            $spinner.show();
            $compile.attr('disabled', true);
            $.ajax('/_create/compile?_=' + new Date().getTime(),
                {
                    type: 'POST',
                    dataType: 'script',
                    data: {source: editor.getValue()}
                }
             ).done(function(data, textStatus, jqXHR) {

             }).fail(function(ijqXHR, textStatus, errorThrown) {

             }).always(function() {
                $spinner.hide();
                $compile.attr('disabled', false);
                editor.setReadOnly(false);
             });
         }

        return false;
    });

    $spinner.hide();
});