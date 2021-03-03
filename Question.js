class Question{

    constructor() {
      this.input = createInput("Enter your name");
      this.input2 = createInput("Enter your answer");
      this.button = createButton('Submit');
      this.title = createElement('h2');
      this.question = createElement('h3');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4 = createElement('h3');
      this.result = createElement('h2');
      
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.input2.hide();
      //this.title.hide();
      this.result.html("Result of the quiz")
      this.result.position(550,150);


      
      
    }
  
    display(){
      this.title.html("MyQuiz Game");
      this.title.position(displayWidth/2 - 50, 0);
      this.question.html("Question: What continent is the USA in?");
      this.question.position(100,100);
      this.option1.html("1: Asia");
      this.option1.position(100,125);
      this.option2.html("2: Europe");
      this.option2.position(100,150);
      this.option3.html("3: North America");
      this.option3.position(100,175);
      this.option4.html("4: Australia");
      this.option4.position(100,200);
      

  
      this.input.position(100,300);
      this.input2.position(300,300);
      this.button.position(250,350);
  
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.input2.hide();
        this.button.hide();
        contestant.answer = this.input2.value();
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);

      });
  
    }
  }
  