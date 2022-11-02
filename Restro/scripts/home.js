var authBtn = document.getElementById("btn");

var restaurents = document.getElementById("list");
var list = document.getElementById("listt");



fetchAllResturents();

var token = localStorage.getItem("token");

if(token){

    authBtn.innerText = "Logout";
    
}
else{
    
    authBtn.innerText = "Login";   

}

authBtn.addEventListener("click",function(){

    if(token){
        logoutUser();
        return;
    }
    window.location.href = "/pages/login.html";

})

function logoutUser(){

    localStorage.removeItem("token");
    window.location.reload();
}

function fetchAllResturents()
{
  var request = new XMLHttpRequest();

  request.open("GET", "https://foodbukka.herokuapp.com/api/v1/restaurant")
  request.send();

  request.addEventListener("load", function()
  {
    if( request.status === 200 )
    {
      console.log(JSON.parse(request.responseText));
      showAllResults( JSON.parse(request.responseText) )
    }
    else
    {
      console.log("something went wrong")
      // error handling
    }
  })

}

function showAllResults(reestaurentData)
{
  reestaurentData.Result.forEach(function(restaurent)
  {
      
      var container = document.createElement("div");
      // container.style.marginLeft="10px";
      container.classList.add("restaurentContainer");
  
      var name = document.createElement("h2");
      name.innerText = restaurent.businessname;
      container.appendChild(name);
  
  
      var address = document.createElement("p");
      address.innerText = "Add: "+restaurent.address;
      container.appendChild(address);
  
      var img_Res = document.createElement("div");
      img_Res.classList.add("img_Res");
  
      var image = document.createElement("img");
      image.setAttribute("src",restaurent.image)
      img_Res.appendChild(image);

      var button = document.createElement("button");
      button.innerHTML="menu";
      
      button.onclick =function(){
        window.location.href = "/pages/menu.html";
      }
     
      img_Res.appendChild(button);
      container.appendChild(img_Res);
      restaurents.appendChild(container);



  });
}