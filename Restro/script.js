var list = document.getElementById("list");

var request = new XMLHttpRequest();

request.open("GET","https://foodbukka.herokuapp.com/api/v1/restaurant");

request.send();

request.addEventListener("load",function(){

    var restaurant =JSON.parse(request.responseText);
    

    restaurant.Result.forEach(function(restaurant){
        
        var item=document.createElement("p");
        item.textContent = restaurant.businessname;

        list.appendChild(item);


    })
    console.log(restaurant);

});

console.log("done");