import { Component, EventEmitter, Input, Output } from '@angular/core';

const id = 'tag-input-item';

@Component({
  selector: id,
  template: require(`./${id}.component.html`),
  styles: [ require(`./${id}.component.scss`) ],
  host: {
    '[class.ng2-tag-input-item-selected]': 'selected'
  }
})
export class TagInputItemComponent {
  @Input() selected: boolean;
  @Input() text: string;
  @Input() index: number;
  @Output() tagRemoved: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  removeTag() {
    this.tagRemoved.emit(this.index);
  }
}
