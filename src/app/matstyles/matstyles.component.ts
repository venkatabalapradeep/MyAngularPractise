import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matstyles',
  templateUrl: './matstyles.component.html',
  styleUrls: ['./matstyles.component.scss'],
 
})
export class MatstylesComponent implements OnInit {
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
}
