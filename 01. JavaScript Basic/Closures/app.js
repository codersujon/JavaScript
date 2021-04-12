//Closures

function father(){
  var name = "ali";
  return function son(){
    console.log(name);
  };
}

//father()();  

 var i = 10;
 function show(){
  var j =20;
   console.log(j);
   console.log(i);
 }

//show();
var m = 10;
function show(){
  var i = "i is a local variable of Outer Function";
  document.write(i + "<br>");
  function innerFun(){
    var j = "j is a local variable of Inner Function";
     document.write(j + "<br>");
     document.write(i + "<br>");
     document.write(m);
  }
  innerFun();
}

show();