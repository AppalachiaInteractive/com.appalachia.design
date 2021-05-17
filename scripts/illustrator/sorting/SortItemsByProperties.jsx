var docRef = app.activeDocument;
var selection = docRef.selection;
var length = docRef.selection.length;

var values = [];

var parentObject;

if (length === 1) {
  parentObject = selection[0];
  length = selection[0].pageItems.length;
  for (i = 0; i < length; i++) {
    var item = selection[0].pageItems[i];
    values.push(item);
  }
} else {
  parentObject = selction[0].parent;
  for (i = 0; i < length; i++) {
    var item = selection[i];
    values.push(item);
  }
}

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

  
alert(sortMode);
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

values.sort(function (a, b) {
  return get_sort_key(a, b, sortMode);
});

if(!sortAscending){
  values.reverse();
}

for (i = 0; i < length; i++) {
  var sortedItem = values[i];
  sortedItem.zOrder(ZOrderMethod.SENDTOBACK);
}
