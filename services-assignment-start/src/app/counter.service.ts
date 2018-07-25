export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  countActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Switched from active to inactive ' + this.activeToInactiveCounter + ' times.');
  }

  countInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Switched from inactive to active ' + this.inactiveToActiveCounter + ' times.');
  }
}