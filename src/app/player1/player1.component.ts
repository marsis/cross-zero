import { Component, OnInit } from '@angular/core';
import {GameLogicService} from '../game-logic.service';
@Component({
  moduleId: module.id,
  selector: 'player1',
  templateUrl: 'player1.component.html',
  styleUrls: ['player1.component.css']
})
export class Player1 implements OnInit {

  constructor(private _gameLogicService: GameLogicService) { }

  ngOnInit() {
  }

}
