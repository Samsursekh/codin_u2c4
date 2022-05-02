// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit" , teamSubmit);
//  var teamArr = JSON.perse(localStorage.getItem("teamList")) || [];
var teamArr =[];

 function teamSubmit(){
     event.preventDefault();

     var teamObj ={
         teamMatchNum: document.querySelector("#matchNum").value,
         teamTeamA : masaiForm.teamA.value,
         teamTeamB : masaiForm.teamB.value,
         teamDate : masaiForm.date.value,
         teamVenue : masaiForm.venue.value,
     };

     teamArr.push(teamObj);

     console.log(teamArr);

     localStorage.setItem("teamList", JSON.stringify(teamArr));

     window.location = "matches.html";




 }

