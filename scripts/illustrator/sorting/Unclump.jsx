//@include "../lib/point.jsx";
//@include "../lib/vector.jsx";

var p = new Point(0, 0);
p = new Point(1, 0);
p = new Point(2, 0);
p = new Point(3, 0);
p = new Point(1, 0);
p = new Point(2, 0);
p = new Point(3, 0);

function getPoint(item) {
    return new Point(item.left + item.width / 2.0, item.top - item.height / 2.0);
}

function getDistance(a, b) {
    var pointA = getPoint(a);
    var pointB = getPoint(b);

    return pointA.getDistance(pointB);
}

function getAverage(item, others) {
    var point = getPoint(item);

    var sum = 0.0;
    for (var index = 0; index < others.length; index++) {
        var otherItem = others[index];
        if (otherItem === item) {
            continue;
        }

        var otherPoint = getPoint(otherItem);
        var otherDistance = point.getDistance(otherPoint);
        sum += otherDistance;
    }

    return sum / others.length;
}

function getClosestItem(item, others) {
    var point = getPoint(item);
    var closestItem = others[0];
    var closestPoint = getPoint(closestItem);
    var closestDistance = point.getDistance(closestPoint);

    for (var index = 1; index < others.length; index++) {
        var otherItem = others[index];
        if (otherItem === item) {
            continue;
        }
        var otherPoint = getPoint(otherItem);
        var otherDistance = point.getDistance(otherPoint);

        if (otherDistance < closestDistance) {
            closestItem = otherItem;
            closestPoint = otherPoint;
            closestDistance = otherDistance;
        }
    }

    return closestItem;
}

function getFarthestItem(item, others) {
    var point = getPoint(item);
    var farthestItem = others[0];
    var farthestPoint = getPoint(farthestItem);
    var farthestDistance = point.getDistance(farthestPoint);

    for (var index = 1; index < others.length; index++) {
        var otherItem = others[index];
        if (otherItem === item) {
            continue;
        }
        var otherPoint = getPoint(otherItem);
        var otherDistance = point.getDistance(otherPoint);

        if (otherDistance > farthestDistance) {
            farthestItem = otherItem;
            farthestPoint = otherPoint;
            farthestDistance = otherDistance;
        }
    }

    return farthestItem;
}

/**
Moves \a movingItem away fixedItem \a fixedItem by \a distance
 */
function pushItemAway(fixedItem, movingItem, distance) {
    var fixedPoint = getPoint(fixedItem);
    var movingPoint = getPoint(movingItem);

    var distanceBetween = fixedPoint.subtract(movingPoint);
    var distanceVector = new Vector(distanceBetween.x, distanceBetween.y);

    var by = distanceVector.multiplyScalar(-distance);

    alert("pushItemAway: " + movingItem);
    movingItem.translate(by.x, by.y, true, true, true, true);
}

/**
Moves \a movingItem towards \a fixedItem by \a distance
 */
function pullItemTowards(fixedItem, movingItem, distance) {
    var fixedPoint = getPoint(fixedItem);
    var movingPoint = getPoint(movingItem);

    var distanceBetween = fixedPoint.subtract(movingPoint);
    var distanceVector = new Vector(distanceBetween.x, distanceBetween.y);

    var by = distanceVector.multiplyScalar(distance);

    alert("pullItemTowards: " + movingItem);
    movingItem.translate(by.x, by.y, true, true, true, true);
}

function arrayRemove(arr, value) {
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === value) {

            arr.splice(i, 1);
            break;
        }
    }

    return arr;
}

/**
Unclumps the items in \a items, reducing local unevenness in their distribution. Produces an effect
similar to "engraver dots". The only distribution which is unchanged by unclumping is a hexagonal
grid. May be called repeatedly for stronger effect.
 */
function unclump(pageItems) {
    for (var i = 0, len = pageItems.length; i < len; i++) {

        var pageItem = pageItems[i]
        alert("pageItem: " + pageItem);
        var neighbors = [];
        var rest = [];

        for (var item in pageItems) {
            if (item != pageItem) {
                rest.push(item);
            }
        }

        while (rest.length > 0) {
            var closest = getClosestItem(pageItem, rest);
            if (closest) {
                neighbors.unshift(closest);
                arrayRemove(rest, closest);
            }
        }

        if (neighbors.length >= 2) {
            var average = getAverage(pageItem, neighbors);

            var closest = getClosestItem(pageItem, neighbors);
            var farthest = getFarthestItem(pageItem, neighbors);

            var dist_closest = getDistance(closest, pageItem);
            var dist_farthest = getDistance(farthest, pageItem);

            if (
                Math.abs(average) < 1e6 &&
                Math.abs(dist_closest) < 1e6 &&
                Math.abs(dist_farthest) < 1e6
            ) {
                // otherwise the items are bogus
                // increase these coefficients to make unclumping more aggressive and less stable
                // the pull coefficient is a bit bigger to counteract the long-term expansion trend
                pushItemAway(closest, pageItem, 0.3 * (average - dist_closest));
                pullItemTowards(farthest, pageItem, 0.35 * (dist_farthest - average));
            }
        }
    };
}

var selection = app.activeDocument.selection;
var length = selection.length;

var pageItems = [];

var parentObject;

alert("selection: " + selection)
if (length === 1) {
    parentObject = selection[0];
    length = selection[0].pageItems.length;
    for (i = 0; i < length; i++) {
        var item = selection[0].pageItems[i];

        if (item.editable && !item.locked && !item.hidden) {
            pageItems.push(item);
        }
    }
} else {
    parentObject = selection[0].parent;
    for (i = 0; i < length; i++) {
        var item = selection[i];
        if (i == 0) {
            alert("item: " + item)
        }
        if (item.editable && !item.locked && !item.hidden) {
            pageItems.push(item);
        }
    }
}

alert("pageItems: " + pageItems);
unclump(pageItems);