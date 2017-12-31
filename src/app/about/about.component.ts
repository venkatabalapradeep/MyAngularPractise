import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // Add this
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;
  constructor(private route: ActivatedRoute , private router: Router , private dataservice: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this.dataservice.goal.subscribe(res => this.goals = res);
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
}
