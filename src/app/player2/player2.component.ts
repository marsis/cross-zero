import { Component, Input, OnInit } from '@angular/core';
import {GameLogicService} from '../game-logic.service';
@Component({
  moduleId: module.id,
  selector: 'player2',
  templateUrl: 'player2.component.html',
  styleUrls: ['player2.component.css']
})
export class Player2 implements OnInit {
 // @Input() counter: number=0;

  constructor(private _gameLogicService: GameLogicService) {
   // console.log(this._gameLogicService);



  }

  ngOnInit() {

  }
}
