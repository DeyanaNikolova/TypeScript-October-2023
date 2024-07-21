type Hike = {
  peak: string;
  time: number;
  difficultyLevel: string;
};

type GoalMap = {
  [peak: string]: number;
};

export class SmartHike {
  username: string;
  goals: GoalMap = {};
  listOfHikers: Hike[] = [];
  resources: number;

  constructor(username: string) {
    this.username = username;
    this.resources = 100;
  }

  addGoal(peak: string, altitude: number): string {
    if (this.goals[peak] === undefined) {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}.`;
    } else {
      return `${peak} has alreary been added to your goals.`;
    }
  }

  hike(peak: string, time: number, difficultyLevel: string): string {
    if (this.goals[peak] === undefined) {
      throw new Error(`${peak} is not in your current goals.`);
    } else if (this.goals[peak] && this.resources === 0) {
      throw new Error("You don't have enough resources to complete the hike.");
    }

    const currentResources = time * 10;
    const difference = this.resources - currentResources;

    if (difference < 0) {
      return "You don't have enough resources to complete the hike.";
    } else {
      this.resources -= currentResources;
      this.listOfHikers.push({ peak, time, difficultyLevel });
      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left.`;
    }
  }

  rest(time: number): string{
    if(this.resources >= 100){
        this.resources = 100;
        return 'Your resources are fully recharged. time for hiking!';
    }
    else{
        return `You have rested for ${time} hours and gained ${time * 10}% resources.`;
    }
  }

  showRecord(criteria: string){
    if(criteria === 'hard' || criteria === 'easy'){
        const allHikes = this.listOfHikers.filter((hike) => hike.difficultyLevel === criteria);
        const bestHike = allHikes.sort((a, b)=> a.time - b.time)[0];

        if(!bestHike){
            return `${this.username} has not done any ${criteria} hike yet.`;
        }
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours.`;
    }

    if(criteria === 'all'){
        const hikes: string[] = [`All hiking records:`];
        this.listOfHikers.forEach(hike => {
            hikes.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours.`);
        });
        return hikes.join('\n');
    }
  }
}
