import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: { id: number; name: string; details: string; img: string }[];
  constructor() { 
    this.team = [
        {id: 1, name: 'Bob', details: 'Head Chef', img: "../../assets/img/chef_team_1-1.jpg"},
        {id: 2, name: 'Sarah', details: 'Station Chef', img: "../../assets/img/chef_team_2-1.jpg"},
        {id: 3, name: 'Sam', details: 'Kitchen Manager', img: "../../assets/img/chef_team_3-1.jpg"},
    ];
  }
  ngOnInit() {
  }
}

