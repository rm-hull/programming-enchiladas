// Hijack getElementById to always return an item
// If one isnt there, just create it before the canvas
document._getElementById = document.getElementById;

document.getElementById = function(id) {
    var elem = document._getElementById(id);
    if (elem === null) {
        if (id.indexOf('MathJax') < 0) {
            var container = document._getElementById('main-arena');
            if (container !== null) {
                elem = document.createElement('div');
                elem.setAttribute('id', id);
                elem.setAttribute('style', 'width:800px; height:600px;overflow:hidden;');
                container.appendChild(elem);
            }
        }
    }
    return elem;
};