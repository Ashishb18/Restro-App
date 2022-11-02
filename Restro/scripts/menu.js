var list = document.getElementById("listt");
console.log('hello js connected');
fetchMenu();

function fetchMenu(){

    var request = new XMLHttpRequest();

    request.open("GET","https://foodbukka.herokuapp.com/api/v1/menu");
    request.send();

    request.addEventListener("load",function(){

        if(request.status===200){
            console.log(JSON.parse(request.responseText));
            showAllMenu(JSON.parse(request.responseText));
            showCost();
        }
        else{
            console.log("something went wrong");
        }

    })
}

function showCost(){

    var request = new XMLHttpRequest();
    request.open("GET","https://foodbukka.herokuapp.com/api/v1/restaurant");
    request.send();

    request.addEventListener("load",function(){

        console.log(JSON.parse(request.responseText));
        var data = JSON.parse(request.responseText)

        var cost_div=document.createElement("div")
        cost_div.classList.add("cost_div")

        var cost = document.createElement("span")
        cost.innerHTML=data.averagecost;

        cost_div.appendChild(cost)
        list.appendChild(cost_div);

})

}

function showAllMenu(restaurantData){

    restaurantData.Result.forEach(function(menu){

        var container = document.createElement("div");
        container.classList.add("menucontainer");

        var mn = document.createElement("h2");
        mn.innerText = menu.menuname;
        container.appendChild(mn)

        var img_Res = document.createElement("div")
        img_Res.classList.add("img_Res");

        var image = document.createElement("img");
        image.setAttribute("src",menu.images[0])
        img_Res.appendChild(image);
        var image = document.createElement("img");
        image.setAttribute("src",menu.images[1])
        img_Res.appendChild(image);
        var image = document.createElement("img");
        image.setAttribute("src",menu.images[2])
        img_Res.appendChild(image);

        var desc_div = document.createElement("div");
        desc_div.classList.add("desc_div");

        var desc = document.createElement("p");
        desc.innerHTML=menu.description;

        desc_div.appendChild(desc);

        container.appendChild(desc_div);

        container.appendChild(img_Res);        
         list.appendChild(container);

    });

}



// function showCost(data){

//     var cost_div=document.createElement("div")
//     cost_div.classList.add("cost_div")

//     var cost = document.createElement("span")
//     cost.innerHTML=data.averagecost;

//     cost_div.appendChild(cost)
//     list.appendChild(cost_div);

// }