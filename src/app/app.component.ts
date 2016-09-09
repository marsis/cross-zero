import { Component, Input } from '@angular/core';
import {Cross} from './cross';
import {Player1} from './player1';
import {Player2} from './player2';
import {GameLogicService} from './game-logic.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [Cross, Player1, Player2],
  providers: [GameLogicService]
})

export class AppComponent {
 title = 'Tic-Tac-Toe';
  @Input() counter: number;

  size: number = 3;
  name: string;
  public line: any[];
  public matrix: any = [];
  public count: number[];


  constructor(private _gameLogicService: GameLogicService ) {
   this.startGame();
  }



  startGame(){
    this.matrix = this._gameLogicService.generateField(this.size);
    //console.info('param', param)
  }


  getSquare(cell, inputValue){

    this._gameLogicService.changeSign(cell, inputValue);
  }


getField(event){
  this._gameLogicService.getField(event);
}


getRange(){
  this._gameLogicService.getRange(this.size);
  this.matrix = this._gameLogicService.matrix;
}

  /*getWinner(cell, size){

    this._gameLogicService.getWinner(this.matrix, this.inputValue);
  }


  /*winCombinatoin(){
    if (this.cell === ''){
      this.sign = 'X';
    }else if(this.sign === 'X'){
      this.sign = 'O';
    }else  if (this.sign ==='O'){
      this.sign = '';
    }
  }*/

}












