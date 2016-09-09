import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {GameLogicService} from '../game-logic.service';

@Component({
  moduleId: module.id,
  selector: 'cross',
  templateUrl: 'cross.component.html',
  styleUrls: ['cross.component.css'],
})

export class Cross implements OnInit {
  @Input() cell: any = {};
  @Input() line: any = [];
  @Input() matrix: any[];

 // @Output() win = new EventEmitter<string>();

  //public sign: string;
  //public counter: number = 0;


  constructor(private _gameLogicService: GameLogicService) {
  //  console.log(this._gameLogicService);
   }

  ngOnInit() {
  }

  getSquare(cell, inputValue){

    this._gameLogicService.changeSign(cell, inputValue);
  }

 /* getWinner() {
    this._gameLogicService.getWinner(this.matrix, this.inputValue);
  }*/
}





