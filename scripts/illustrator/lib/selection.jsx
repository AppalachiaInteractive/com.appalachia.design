
function getSelectedPageItems(document) {

    var selection = document.selection;
    var length = document.selection.length;

    var pageItems = [];

    var parentObject;

    if (length === 1) {
        parentObject = selection[0];
        length = selection[0].pageItems.length;
        for (i = 0; i < length; i++) {
            var item = selection[0].pageItems[i];
            pageItems.push(item);
        }
    } else {
        parentObject = selction[0].parent;
        for (i = 0; i < length; i++) {
            var item = selection[i];
            pageItems.push(item);
        }
    }

    return pageItems;
}