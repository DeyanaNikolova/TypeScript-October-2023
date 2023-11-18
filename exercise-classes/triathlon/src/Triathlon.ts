export type Participant = {
  [participantName: string]: string;
};

type Finalist = {
  name: string;
  gender: string;
};

export class Triathlon {
  private competitionName: string;
  private participants: Participant = {};
  private listOfFinalists: Finalist[] = [];

  constructor(competitionName: string) {
    this.competitionName = competitionName;
  }

  addParticipant(participantName: string, participantGender: string): string {
    if (!this.participants[participantName]) {
      this.participants[participantName] = participantGender;
      return `A new partivcipant has been added - ${participantName}.`;
    } else {
      return `${participantName} has already been added ti the list.`;
    }
  }

  completeness(participantName: string, condition: number) {
    if (!this.participants[participantName]) {
      return `${participantName} is not on the current participant list.`;
    }

    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline.`
      );
    }

    const disciplines = Math.floor(condition / 30);
    if (disciplines > 0 && disciplines <= 2) {
      return `${participantName} could only complete ${disciplines} of the disciplines.`;
    } else if (disciplines === 3) {
      const participantGender = this.participants[participantName];

      this.listOfFinalists.push({
        name: participantName,
        gender: participantGender,
      });
      return `Congratulations, ${participantName} finished the while competition!`;
    }
  }

  rewarding(participantName: string) {
    const completed = this.listOfFinalists.some(
      (f) => f.name === participantName
    );
    if (!completed) {
      return `${participantName} is not in the current finalist list.`;
    } else {
      return `${participantName} was rewaeded with a trothy for this performance!`;
    }
  }

  showRecord(criteria: string) {
    if (this.listOfFinalists.length == 0) {
      return "There are no finalists in this competition.";
    }

    if (criteria === "male" || criteria === "female") {
      const finalisByGender = this.listOfFinalists.filter(
        (f) => f.gender === criteria
      );
      if (finalisByGender.length === 0) {
        return `There are no ${criteria}'s that finished the competition.`;
      } else {
        return `${finalisByGender[0].name} is the first ${criteria} that  finished the ${this.competitionName} triathlon.`;
      }
    } else if (criteria === "all") {
      const sortedFinalistNames = this.listOfFinalists.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      const result: string[] = [`List of all ${this.competitionName} finalists:`]; 
      sortedFinalistNames.forEach(f => {
        result.push(`${f.name}`);
      });
      return result.join('\n');
    }
  }
}
