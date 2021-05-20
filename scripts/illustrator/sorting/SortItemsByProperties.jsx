//@include "../lib/selection.jsx";

alert("Starting to sort!");

sortVertically=true;
sortAscending=true;
sortByFirstEdge=true;
sortMode = 0;

sortVertically = confirm("Sort items vertically?");
if (sortVertically) {
  sortByFirstEdge = confirm("Determine object position by top edge?");
  sortAscending = confirm("Higher objects end up in front?");
}
else {
  sortByFirstEdge = confirm("Determine object position by left edge?");
  sortAscending = confirm("Left-most objects end up in front?");
}

if (!sortVertically) {
  sortMode += 100;
}

if (!sortByFirstEdge) {
  sortMode += 10;
}

function get_sort_key(a, b, sortMode) {
  switch (sortMode) {
    case 0:
      return a.top < b.top ? 1 : -1;
    case 10:
      return (a.top-a.height) < (b.top-b.height) ? 1 : -1;
    case 100:
      return a.left < b.left ? 1 : -1;
    case 110:
      return (a.left+a.width) < (b.left+b.width) ? 1 : -1;
  }
  return 0;
}

var docRef = app.activeDocument;
var pageItems = getSelectedPageItems(docRef);
var length = pageItems.length;

pageItems.sort(function (a, b) {
  return get_sort_key(a, b, sortMode);
});

if(!sortAscending){
  pageItems.reverse();
}

for (i = 0; i < length; i++) {
  var sortedItem = pageItems[i];
  sortedItem.zOrder(ZOrderMethod.SENDTOBACK);
}

alert("Sorted " + length + " items!");