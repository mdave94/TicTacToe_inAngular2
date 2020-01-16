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
  newGame() {
		this.gs.freeBlocksRemaining = 9;
		this.gs.initBlocks();
		
		this.gs.turn = 0;
	}

  playerClick(i){
    
    if (this.gs.turn == 0 && this.gs.blocks[i].free == true){
      this.gs.blocks[i].setValue("thick");
      this.gs.blocks[i].free = false;

    }else{
      this.gs.blocks[i].setValue("cross");
      this.gs.blocks[i].free = false;

    }
    //this.gs.blocks[i].free = false;
  
   
    console.log(this.gs.blocks[i]);
    console.log(this.gs.blocks[i].free);
    
  var complete = this.gs.blockSetComplete();
		if( complete == false ) {
			this.changeTurn();	
			return;
			
		} else {
			
			
			
      alert(this.gs.blocks[i].symbol+" Won the game!");
		  //  this.newGame();
		    return;
		}
  }


  changeTurn(){
    this.gs.changeTurn();
    
  }
 


}
