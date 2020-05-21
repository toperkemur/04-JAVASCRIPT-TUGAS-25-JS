var arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : ", arr.join(","));
arr = arr.sort();
console.log("Ascending : ",arr.join(","));
arr = arr.reverse();
console.log("Descending : ",arr.join(","));
arr = arr.filter(function(element){
  return element > 10;
})
console.log("Filter > 10 : ",arr.join(","));
