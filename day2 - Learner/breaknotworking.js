 document.getElementById("button1").onclick = function() {
       var x1 = 0;
    for (var i = 1; i <= 50; i++) {
        x1 = x1 + i + '<br>';
        console.log(i);
    document.getElementById("result").textContent = x1;
//        text += i + "<br>";
    
        
    }
 }