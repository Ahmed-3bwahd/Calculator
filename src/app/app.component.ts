import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Calculator';
  prev = null;
  currunt:any = '';
  new = '';
  oprclicked = false;
  operator = null;
  oprshape = '';
  afterequal = false;

  clear() {
    this.currunt = '';
    this.new = '';
    this.prev = '';
    this.oprclicked = false
  };

  sign() { this.currunt = this.currunt.charAt(0) === '-' ? this.currunt.slice(1) : `-${this.currunt}`; };

  percent() { this.currunt= parseFloat(this.currunt)/100 };

  number(num) {
    if(this.currunt.length >= 14) {
      this.currunt =
        `${this.currunt}
        `
      }
    if (this.currunt == 0 || this.oprclicked == false) {
      if(this.afterequal == true){
        this.currunt = '';
        this.afterequal = false
      }else{
        this.currunt = `${this.currunt}${num}`;
      }
    }else{
      if (this.oprclicked == true) {
      this.currunt =`${this.prev}${this.oprshape}`;
      this.new = `${this.new}${num}`;
      this.currunt =`${this.currunt}${this.new}`
      }
    }
  };

  dot() {
    if (this.currunt.indexOf('.') === -1) {
      this.currunt= `${this.currunt}.` ;
    }
  };

  divide() {
    this.operator = (a,b) => a / b;
    this.oprclicked = true;
    this.prev = this.currunt;
    this.oprshape = ' ÷ ';
    this.new = '';
    this.afterequal = false
  };

  times() {
    this.operator = (a,b) => a * b;
    this.oprclicked = true;
    this.prev = this.currunt;
    this.oprshape = ' * ';
    this.new = '';
    this.afterequal = false
  };

  minus() {
    this.operator = (a,b) => a - b;
    this.oprclicked = true;
    this.prev = this.currunt;
    this.oprshape = ' - ';
    this.new = '';
    this.afterequal = false
  };

  add() {
    this.operator = (a,b) => a+b;
    this.oprclicked = true;
    this.prev = this.currunt;
    this.oprshape = ' + ';
    this.new = '';
    this.afterequal = false
  };

  equal() {
    if(this.afterequal == true){
      this.currunt = ''
    }else{
    this.currunt = `${this.operator(parseFloat(this.prev) , parseFloat(this.new)) }`;
    this.prev ='';
    this.oprclicked = false;
    this.afterequal = true
    }
  }
}
