import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedList = 'recipe';

  displayList(chooseList: string) {
      this.loadedList = chooseList;
  }
}
