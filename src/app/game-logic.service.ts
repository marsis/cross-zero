import { Injectable } from '@angular/core';

@Injectable()

export class GameLogicService {
  private sign: string;
  private counter: number = 0;
  public inputValue: any = 3;
 // public x:string;
  public matrix: any = [];
i: any;
  j: any;
 public arr: any = [];
  constructor() {
    //console.log('inputValue ', this.inputValue);
  }

  changeSign(cell, inputValue) {

    //console.log('cell', cell);
   // console.log('inputValue', inputValue);
//debugger;
    if (cell.value === '' && this.counter % 2 === 0) {
      this.counter++;
      //this.cell.clicked = true;
      cell.value = 'o';
     // this.arr.push(cell.value);
    //  console.log(cell);
    //  console.log(this.counter);
 this.getWinnerLines(cell, inputValue);
 this.getWinnerColumns(cell, inputValue);
 this.getWinnerDiagonal(cell, inputValue);
    } else if (cell.value === '' && this.counter % 2 !== 0) {
      //this.counter++;
      //this.cell.clicked = true;
      cell.value = 'x';
      //this.arr.push(cell.value);
      this.counter++;
     // console.log(cell);
    //  console.log(this.counter);
 this.getWinnerLines(cell, inputValue);
 this.getWinnerColumns(cell, inputValue);
 this.getWinnerDiagonal(cell, inputValue);
    }
   // console.log('arr',this.arr);
  }

 getWinnerLines(matrix, inputValue) {
   for (let i = 0; i < this.inputValue; i++) {
     let counterX = 0;
     let counter0 = 0;
     for (let j = 0; j < this.inputValue; j++) {
       if (this.matrix[i][j].value === 'x') {
         counterX++;
       } else if (this.matrix[i][j].value === 'o') {
         counter0++;
       }
       if (counter0 === this.inputValue) {
         setTimeout(()=>alert('First player won!'), 300);
         this.counter = 0;
       } else if (counterX === this.inputValue) {
         setTimeout(()=>alert('Second player won!'), 300);
         this.counter = 0;
       }
     }
   }

 }
   getWinnerColumns(matrix, inputValue) {
     for(let j= 0; j<this.inputValue; j++){
       let counterX = 0;
       let counter0 = 0;
       for(let i=0; i< this.inputValue; i++){
         if(this.matrix[i][j].value==='x'){
           counterX++;
         }else if(this.matrix[i][j].value==='o'){
           counter0++;
         }
         if(counter0 === this.inputValue){
           setTimeout(()=>alert('First player won!'),300);
           this.counter = 0;
         }else if(counterX === this.inputValue){
           setTimeout(()=>alert('Second player won!'),300);
           this.counter = 0;
         }
       }
     }
  }
  getWinnerDiagonal(matrix, inputValue) {
    for(let i= 0; i<3; i++){
      let counterX = 0;
      let counter0 = 0;
      for(let j=0; j<3; j++){
        if((i==j) && this.matrix[i][j].value==='x'){
          counterX++;
          console.log('counterX', counterX);
        }else if((i==j) && this.matrix[i][j].value==='o'){
          counter0++;
         // console.log('counter0', counter0);
        }
        if(counter0 === 3){
          setTimeout(()=>alert('First player won!'),300);
          this.counter = 0;
        }else if(counterX === 3){
          setTimeout(()=>alert('Second player won!'),300);
          this.counter = 0;
        }
      }
    }
  }


  getField(event){
    // this.inputValue = input.value;
   // console.log("event", event);
    this.inputValue = event.target.value;
   // console.log(this.inputValue);
    this.matrix = [];


    this.generateField(this.inputValue);
  }






   getRange(size) {
     this.inputValue = size;
     //this.month = this.item.multiplier;
     //console.log(this.month);
     console.log(this.inputValue);
     this.matrix = [];
     this.generateField(this.inputValue);
   }



  generateField(num) {

    for (let i = 0; i < num; i++) {
      let arr = [];
      this.matrix[i] = arr;
      for (let j = 0; j < num; j++) {
        this.matrix[i][j] = (this.createItem());

      }
    }
  //  console.log("МАТРИЦА", this.matrix);
    return this.matrix;
  }


  createItem() {
    return {value: '', i: ''};
  }




}
