/**
 * Fetch API
 * Fetch is built in the browser
 * Fetch compare with ajax
 */

document.getElementById('get_data').addEventListener('click', getData);

/*
function getData(){
    //fetch function ti data promise akare anbe jodi sb kisu thik thak thake tahole anbe
    //otherwise error show korbe.

    fetch('http://api.icndb.com/jokes/random')
    //promise akare anar por repose akare store kortese and pore return kortese
    .then(function(res){
        return res.json();
    })
    // aikhane return ta ke data te store krtese
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err)
    })
}
*/

let test = para1 => res.json()

// Using Arrow Function
function getData(){
    fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => {console.log(data);})
    .catch(err => {console.log(err);})
}