/**
 * Callback Function
 * JavaScript Promise is a alternative of callback function
 * promise is use a -> .than() method
 */


// A array of products is we can call a server for dummy purpose
let products = [
    {p_No: 101, p_Name:'Oxalic Acid', p_Origin:'China'},
    {p_No: 103, p_Name:'Soda Ash', p_Origin:'India'}
];

// Product push into products array
function createProduct(product){
    let prom = new Promise(function(resolve, reject){
        products.push(product);
        //Fake 
        let error  = false;
        if (!error) {
            resolve();
        } else {
            reject(`Data Error!: Something Wrong`);
        }
        
    }) 
    return prom;
}

//get data from array
function getData(){
    setTimeout(function(){
        let display = ''; 
        products.forEach(function(p_item){
           display += `<li>${p_item.p_No} ${p_item.p_Name} ${p_item.p_Origin}</li>`;
        })
        document.getElementById('output').innerHTML = display;
    }, 1000)
}


createProduct({p_No: 104, p_Name:'Common Salt', p_Origin:'Bangladesh'})
.then(getData)
.catch(function(error){
    console.log(error);
});
