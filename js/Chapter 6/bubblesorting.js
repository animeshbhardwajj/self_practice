var a = [36,19,29,12,5];
 function bubble(a){

 for(var i = 0; i < a.length; i++){
  for(var j = 0; j < ( a.length - i -1 ); j++){
    if(a[j] > a[j+1]){
     var temp = a[j];
     a[j] = a[j + 1];
     a[j+1] = temp;
    }
   }
 }
 console.log(a);
}
bubble(a);