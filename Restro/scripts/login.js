var username = document.getElementById("user-name");
var password = document.getElementById("password");
var login = document.getElementById("login");
var errNode = document.getElementById("error");
// var signup = document.getElementById("signup");

var token = localStorage.getItem("token",token);

if(token){
    window.location.href ='/';
}

login.addEventListener("click",function(){

        var usName = username.value;
        var pwd = password.value;
        loginUser(usName,pwd);

})


// signup.addEventListener("click",function(){

//     var usName = username.value;
//     var pwd = password.value;

//     signupUser(usName,pwd);

// })


function loginUser(usName,pwd){

    var request = new XMLHttpRequest();

    request.open("POST","https://foodbukka.herokuapp.com/api/v1/auth/login");

    request.setRequestHeader("Content-Type","application/json");

    var body = {
        "username": usName,
        "password":pwd
    }

    request.send(JSON.stringify(body));

    request.addEventListener("load",function(){

        const result = JSON.parse(request.responseText);

        if(request.status!==200){
            showError(result);
        }
        else{
            loginSuccess(result);
        }

    })

}

function showError(data){
    errNode.innerText = data.error;
}

function loginSuccess(data){

    localStorage.setItem("token",data.token);
    window.location.href = "/";

}


// function signupUser(usName,pwd){

//     var request = new XMLHttpRequest();

//     request.open("POST","https://foodbukka.herokuapp.com/api/v1/auth/register");

//     request.setRequestHeader("Content-Type","application/json");

//     var body = {
//         "username": usName,
//         "password":pwd,
//         "phoneNumber": "0123456789",
//         "email": usName +"@email.com"
//     }

//     request.send(JSON.stringify(body));

//     request.addEventListener("load",function(){

//         var data = JSON.parse(request.responseText);

//         if(data.status==="success"){
//             localStorage.setItem("token",data.token);
//         }
//         // console.log(request.responseText);

//     })

// }