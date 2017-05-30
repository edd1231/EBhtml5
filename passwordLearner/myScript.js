//this is my script for the password

//alert("hello");
document.getElementById("userForm").style.display="none";
document.getElementById("linkB").style.display="none";
document.getElementById("userP").focus();

//document.getElementById("myRegister").onclick= function() {
//document.getElementById("userForm").style.display="block";
//};
//same function but with an event listener
//document.getElementById("myRegister").addEventListener("click", registerUser, false);
//function registerUser(){
//    console.log("hi");
//    document.getElementById("userForm").style.display="initial";
//};

var listPassword;
var listUsername;
var savedPassword;
var userPassword;
var enterCase = 0;
var correctPassword;
var wrongPassword = [];
var userPassArray = [];
window.onload = function() {
    if(localStorage.registerRecord) {
        userPassArray = JSON.parse(localStorage.registerRecord);
            console.log(userPassArray);
    }
}

function registerUser(){
    document.getElementById("wrongMessages").display.style="none";
    //inner HTML targets and replaces part of the html code 
    document.getElementsByTagName("h3")[0].innerHTML = "enter your details below to Register";
    var hide = document.getElementById("hide");
    for(var i = 0; i < hide.length; i++) {
    hide[i].style.display = "none";
    };
    
    document.getElementById("userForm").style.display="block";
    document.getElementById("userName").focus();
    document.getElementById("userName").innerHTML=" ";
    
    document.getElementById("myCancel").onclick= function(){
        location.reload();
    };
    document.getElementById("mySubmit").onclick = function(){
        var myUsername = document.getElementById("userName").value;
        var myPassword = document.getElementById("passWord").value;
        console.log(myPassword);
        retrievePassword(myPassword);
        console.log(correctPassword);
        console.log(savedPassword);
        
        if ( myUsername !== "" && myPassword !== "" && correctPassword !== "access"){
            
            var passObj = {
                username: myUsername,
                password: myPassword
            };
            
            userPassArray.push(passObj);
            //in order to save data into the web storage you need to stringify to transform 
            localStorage.registerRecord = JSON.stringify(userPassArray);
            location reload();
        //resets password if it doesnt contain info
        } else if (myUsername === ""|| myPassword === "") {
        document.getElementsByTagName("h3")[0].innerHTML = "Please enter your USERNAME / PASSWORD or BOTH";
            document.getElementById("userName").focus();
            document.getElementById("userName").innerHTML = "";
        } else{
        correctPassword ="noAccess";
        document.getElementsByTagName("h3")[0].innerHTML = "Sorry this PASSWORD ALREADY EXISTS";
            document.getElementById("passWord").focus();
            document.getElementById("passWord").innerHTML = "";
        }
    }
    function retrievePassword(inputPassword) {
        console.log(inputPassword);
        for(var i = 0; i < userPassArray.length; i++) {
        if (inputPassword == userPassArray[i].password) {
        correctPassword = "access";
        }
        }
};