// write js code here corresponding to matches.html


var teamArr = JSON.perse(localStorage.getItem("teamList"));

displayData(teamArr);

// var favArr = JSON.perse(localStorage.getItem("favorites")) || [];
var teamArr =  [];

function displayData(data){
    document.querySelector(tbody).innerText ="";

    data.map(function (elem){
         var tr = document.createElement("tr");
var td1 =  document.createElement("td");
td1.innerText = elem.teamMatchNum;

var td2 =  document.createElement("td");
td2.innerText = elem.teamTeamA;


var td3 =  document.createElement("td");
td3.innerText = elem. teamTeamB;


var td4 =  document.createElement("td");
td4.innerText = elem.teamDate;


var td5 =  document.createElement("td");
td5.innerText = elem. teamVenue;

var td6 =  document.createElement("td");
td6.innerText = "Favourite";
td6.style.color = "blue";
td6.style.cursor ="pointer";

td6.addEventListener("click" , function(){
    favFunction(elem);
})

tr.append( td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr);



    })
}


function favFunction(elem){

    console.log(elem);
   teamArr.push(elem);

    localStorage.setItem("favourites" , JSON.stringify(teamArr));

}
