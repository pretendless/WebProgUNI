var firstTask = new Array(1000);

for(var i = 0; i < firstTask.length; i++) {
    firstTask[i] = Math.floor(Math.random() * Math.floor(1000000));
    console.log("[1]" + firstTask[i]);
}

console.log("[2]");
console.log("max - " + secondTask_max(firstTask));
console.log("min - " + secondTask_min(firstTask));
console.log("med - " + secondTask_med(firstTask));

var thirdTask = new Array();
thirdTask = quickSort(firstTask, 0, firstTask.length);

for(var i = 0; i < thirdTask.length; i++) {
    console.log("[3] " + thirdTask[i]);
}

/*
var k = document.body.children;
for (var i = 0; i < k.length; i++) {
    console.log( k[i].tagName ); // DIV, UL, DIV, SCRIPT
}*/

var fourthtask = new Array();
fourthtask = ft_findthemall(fourthtask, document.body.children);

function ft_findthemall(arr, place) {
    for(var i = 0; i < place.length; i++)
    {
        arr.push(place[i].tagName);
        arr = ft_findthemall(arr, place[i].children);
    }

    return arr;
}

var used = new Array(fourthtask.length);
for(var i = 0; i < fourthtask.length; i++) {
    used[i] = 0;
}

for(var i = 0; i < fourthtask.length; i++) {
    if(used[i] == 0) {
        var cnt = 0;
        for(var j = 0; j < fourthtask.length; j++) {
            if(fourthtask[i] == fourthtask[j]) {
                cnt++;
                used[j] = 1; 
            }
        }
        console.log(fourthtask[i] + ": " + cnt);
    }
}
/*
var elems = document.documentElement.childNodes;
elems = Array.prototype.slice.call(elems); // теперь elems - массив

elems.forEach(function(elem) {
  console.log( elem.tagName ); // HEAD, текст, BODY
});
*/

//Ищем медиану, минимум и максимум
function secondTask_max(arr) {
    var ans = arr[0];
    for(var i = 0; i < arr.length; i++)
        if(ans < arr[i]) ans = arr[i];

    return ans;
}

function secondTask_min(arr) {
    var ans = arr[0];
    for(var i = 0; i < arr.length; i++)
        if(ans > arr[i]) ans = arr[i];

    return ans;
}

function secondTask_med(arr) {
    var ans_arr = new Array();
    ans_arr = quickSort(arr, 0, arr.length - 1);
    
    return ans_arr[arr.length/2];
}

//Quicksort
function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}