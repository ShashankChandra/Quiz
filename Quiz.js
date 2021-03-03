class Quiz{

constructor()
{



}

getState()
{

var gamestateRef = database.ref('gameState');
gamestateRef.on("value",function(data){

gameState = data.val;

})

}


update(state)
{

database.ref('/').update({

gameState: state

});


}

play(){

question.hide();
Contestant.getContestantInfo();
var displayPosition = 250;
console.log(allContestants);
if(allContestants !== undefined)
    {
    for(var i in allContestants)
    {
      
      if(allContestants[i].answer==="3")
      {

        fill("red");

      }
      else
      {

        fill("black");

      }
      
      
      textSize(20);
      displayPosition = displayPosition + 50;
      text(allContestants[i].name + ": " + allContestants[i].answer,550,displayPosition-75);
    }
  }  

}


async start()
{

    if(gameState === 0){
        contestant = new Contestant();
        var contestantRef = await database.ref('contestantCount').once("value");
        if(contestantRef.exists()){
          contestantCount = contestantRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }


   }
}   
