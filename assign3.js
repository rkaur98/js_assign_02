let myArr = [1,2,3]

function add2(a)
{
    return a + 2
}
console.log('Array is')
    console.log(myArr)


for(let x=0; x< myArr.length; x++)
{
   myArr[x]= add2(myArr[x])

}
console.log('Modified Array is:')
console.log(myArr)