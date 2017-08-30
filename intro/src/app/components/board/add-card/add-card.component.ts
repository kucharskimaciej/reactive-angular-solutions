import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'board-add-card',
  templateUrl: 'add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class BoardAddCardComponent {
  @Output() addCard = new EventEmitter<string>();
  adding: boolean = false;
  title: string = '';

  @ViewChild('input') input: ElementRef;

  toggle() {
    this.adding = !this.adding;

    if (this.adding) {
      setTimeout(() => this.input.nativeElement.focus(), 0);
    }
  }

  reset() {
    this.adding = false;
    this.title = '';
  }

  onSubmit() {
    this.addCard.emit(this.title);
    this.reset();
  }
}
