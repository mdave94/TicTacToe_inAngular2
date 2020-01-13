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
  freeBlockRemaining; number = 9;

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


}
