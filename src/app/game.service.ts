import { Injectable } from '@angular/core';
import { Block } from './block';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  players = [];
  turn: number = 1; //X first
  draw: number = 0;


  blocks = [];
  freeBlocksRemaining; number = 9;

  constructor() {
      this.initBlocks();
      this.initPlayers();

   }



  initBlocks(){
    this.blocks = [];

    for( var i =0 ;i < 9 ; ++i){
      
        var block = new Block();
        block.free = true;
        block.value = "";
        block.symbol = "";
        
        this.blocks.push(block);

    }

  }


  initPlayers(){

    this.players = [];

      var player1 = new Player();
      player1.bot = false;
      


      var player2 = new Player();

      this.players.push(player1);
      this.players.push(player2);

  }
  changeTurn(){
    if(this.turn == 0){
        this.turn = 1;   
    }else{
      this.turn = 0;   
    }
  }

	blockSetComplete() {
		var block1 = this.blocks[0];
		var block2 = this.blocks[1];
		var block3 = this.blocks[2];
		
		var block4 = this.blocks[3];
		var block5 = this.blocks[4];
		var block6 = this.blocks[5];
		
		var block7 = this.blocks[6];
		var block8 = this.blocks[7];
		var block9 = this.blocks[8];

		if( 
			(block1.free == false && block2.free == false && block3.free == false && (block1.value == block2.value) && (block1.value == block3.value)) || 
			(block1.free == false && block4.free == false && block7.free == false && (block1.value == block4.value) && (block1.value == block7.value)) || 
			(block1.free == false && block5.free == false && block9.free == false && (block1.value == block5.value) && (block1.value == block9.value)) ||
			(block2.free == false && block5.free == false && block8.free == false && (block2.value == block5.value) && (block2.value == block8.value)) || 
			(block3.free == false && block6.free == false && block9.free == false && (block3.value == block6.value) && (block3.value == block9.value)) ||
			(block3.free == false && block5.free == false && block7.free == false && (block3.value == block5.value) && (block3.value == block7.value)) ||
			(block4.free == false && block5.free == false && block6.free == false && (block4.value == block5.value) && (block4.value == block6.value)) ||
			(block7.free == false && block8.free == false && block9.free == false && (block7.value == block8.value) && (block7.value == block9.value))
		) {
			return true;
		}


		return false;
	}


 






}
