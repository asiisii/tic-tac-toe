class Player {
  constructor(name) {
    this.name = name;
    this.countWins = 0;
  }

  calculateWins() {
    this.countWins++;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }

  retrieveWinsFromStorage() {
    var scores = JSON.parse(localStorage.getItem (this.name)) || 0;
    return scores;
  }

}
