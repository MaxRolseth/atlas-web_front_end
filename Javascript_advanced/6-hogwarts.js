class studentHogwarts {
  #privateScore;
  #name;

  constructor(){
   this.#privateScore = 0;
   this.#name = null;
  };

  changeScore(points) {
    this.#privateScore += points;
  }

  setName(newName){
    this.#name = newName;
  }

  rewardStudent()
  {
    this.changeScore(1);
  }

  penalizeStudent(){
    this.changeScore(-1);
  }

  getScore()
  {
    return `${this.#name}: ${this.#privateScore}`;
  }
}

var harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();

console.log(harry.getScore());


var draco = new studentHogwarts();
draco.setName("Draco");
draco.penalizeStudent();

console.log(draco.getScore());