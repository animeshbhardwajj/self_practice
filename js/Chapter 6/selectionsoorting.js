console.log(("Selection Sorting:"), 38,52,9,18,6,62,13)

var a = [38,52,9,18,6,62,13];
 function selection(a){

 for(var i = 0; i < a.length; i++){
    var min = i;
     for(var j = i + 1; j < a.length; j++){
    if(a[j] < a[min]){
        min=j;
    }
     }
     var temp = a[i];
     a[i] = a[min];
     a[min] = temp;
 }
}
console.log("Output:")
console.log(a);
selection(a);