 console.log(("Insert Sorting:"), 5,1,6,2,4,3);

var a = [5,1,6,2,4,3]
function insertion(a){
var temp, j;
for(var i=1; i<a.length; i++)
{
    temp=a[i];
    j=i;
    while(j>0&&a[j-1]>temp){
    
        a[j] = a[j-1];
    }

    j=j-1;
    a[j] = temp;
}
}
console.log(a)
insertion(a)
