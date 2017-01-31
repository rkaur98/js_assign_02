var myArr=['5','9']
console.log("array")
console.log(myArr)

var v=myArr.splice(2,1,4)
function arrPush(arr,value)
{
    console.log("array after insertion of values:"+arr)
    console.log(arr)
    
}

arrPush(myArr,v)

