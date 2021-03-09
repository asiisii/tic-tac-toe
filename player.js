class Player {
  constructor(name) {
    this.name = name;
    this.countWins = this.retreieveWinsFromStorage().countWins || 0;
  }

  calculateWins() {
    this.countWins++;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.name}`, JSON.stringify(this));
  }

  retreieveWinsFromStorage() {
    var scores = JSON.parse(localStorage.getItem (`${this.name}`)) || 0;
    return scores;
  }

}
