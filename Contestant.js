class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      this.answer = null;
    }

    

    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestant/player" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer: this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  