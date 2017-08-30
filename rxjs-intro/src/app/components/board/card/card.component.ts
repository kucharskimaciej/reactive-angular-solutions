import {Component, Input, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'board-card',
  template: `
    <div class="card" [routerLink]="['/details', cardId]">
      <span class="title">{{ title }}</span>
    </div>
  `,
  styleUrls: ['./card.component.css']
})

export class BoardCardComponent implements OnInit {
  @Input() cardId: string;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
