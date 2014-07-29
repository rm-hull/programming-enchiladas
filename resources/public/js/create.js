
$(document).ready(function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/clojure");
    editor.setFontSize(12);
    editor.setShowInvisibles(false);
    editor.setShowFoldWidgets(false);
    editor.setDisplayIndentGuides(true);

    var $compile = $("#compile");
    $compile.bind('click', function(event) {
        if ($compile.attr('disabled') === undefined) {
            $('#spinner').removeClass('hidden');
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
                $('#spinner').addClass('hidden');
                $compile.attr('disabled', false);
             });
         }

        return false;
    });

});