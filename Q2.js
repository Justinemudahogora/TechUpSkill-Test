const items=[
    {name:"Bike",price:100},
    {name:"TV",price:200},
    {name:"Album",price:10},
    {name:"Book",price:5},
    {name:"Phone",price:500},
    {name:"Computer",price:1000},
]


//1. Cheap one
const sortedItems1=items.sort(function(a, b) {
    return a.price - b.price;
});

console.log(sortedItems1[0])

//2. Expensive one
const sortedItems2=items.sort(function(a, b) {
    return b.price - a.price;
});

console.log(sortedItems1[0])

//3. calculate total
var total=0;
for(var i=0;i<items.length;i++){
    total+=items[i].price
}
console.log(total)

//4. calculate total of products for which price is price is greater or equal to 10
var total2=0;
for(var i=0;i<items.length;i++){
    if(items[i].price>=10){

        total2+=items[i].price
    }
}
console.log(total2)