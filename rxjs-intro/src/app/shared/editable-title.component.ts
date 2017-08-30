import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'editable-title',
  template: `
    <div [class.is-editing]="editing" (click)="startEditing()">
      <ng-container *ngIf="editing; else contents">
        <input [(ngModel)]="value" (blur)="stopEditing(value)" #input />
      </ng-container>
      <ng-template #contents>
        {{ value }}
      </ng-template>
    </div>
  `,
  styleUrls: ['./editable-title.component.css']
})

export class EditableTitleComponent {
  @Input() value: string;
  @Output() update = new EventEmitter<string>();
  editing: boolean = false;

  @ViewChild('input') input: ElementRef;

  startEditing() {
    this.editing = true;
    setTimeout(() => this.input.nativeElement.focus(), 0);
  }

  stopEditing() {
    this.editing = false;
    this.update.emit(this.value);
  }
}
