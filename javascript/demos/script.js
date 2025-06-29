    // console.log("Hello, World!");
    // alert("Hi")

    function displayName() {
        var name = document.getElementById("name").value
        // alert("Hello, " + name + "!");
        document.getElementById("result").innerHTML= "Hello, <b>" + name + "</b>!";
        // document.writeln("Hello, " + name + "!");
    }
  var a = 10;
  let b = 20;
    function f2(){
       a = 100;
        
        b = 200;
        const c = 30;
        // c=300;
        console.log("a: " + a);
        console.log("b: " + b); 
        console.log("c: " + c);
    }
   function f3(){
    console.log("a: " + a);
        console.log("b: " + b); 
        // console.log("c: " + c);
   }
   f2();
   f3()