import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
            trigger('goals', [
          transition('* => *', [
                query(':enter', style({ opacity: 0 }), {optional: true}),
                query(':enter', stagger('300ms', [
              animate('.6s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
              ]))]), {optional: true})
              ,
            query(':leave', stagger('300ms', [
              animate('.6s ease-out', keyframes([
                style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
                style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
              ]))]), {optional: true})
          ])
        ])
      ]
})
export class HomeComponent implements OnInit {
 itemCount: number = 4;
 btnText: string = 'Add an Item'; // Add this line
 goalText: string = 'My first life goal';    // Add this
 goals = [];
 // goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length; // to calcuate the number of added items
        this.dataservice.changeGoal(this.goals);
  }
  // creating addItem method which will be used as click event in home.component.html
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this.dataservice.changeGoal(this.goals);
  }
  removeItem(i) {
    // this.goals.push(this.goalText);
    this.goals.splice(i, 1);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this.dataservice.changeGoal(this.goals);
  }
}