import { Component } from '@angular/core';
import {GameService} from './game.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameService]
})
export class AppComponent {
  title = 'DEMO tictactoe';

  constructor(public gs:GameService){

  }

  playerClick(i){
    if (this.gs.turn == 0){
      this.gs.blocks[i].setValue("tick")
    }else{
      this.gs.blocks[i].setValue("tick")
    }
  }


}
