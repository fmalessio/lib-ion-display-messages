import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-ion-display-messages',
  templateUrl: 'ion-display-messages.component.html',
  styleUrls: ['ion-display-messages.component.scss']
})
export class IonDisplayMessagesComponent implements OnInit {

  visible: boolean;

  @Input() type: 'success' | 'info' | 'warning' | 'error';
  @Input() dismissible: boolean;
  @Input() icon: boolean;
  @Output() dismiss = new EventEmitter<any>();
  @Output() isVisibleChange = new EventEmitter();

  constructor() {
    this.dismissible = true;
    this.visible = false;
    this.icon = true;
  }

  ngOnInit(): void {
  }

  @Input()
  get isVisible() {
    return this.visible;
  }

  set isVisible(value) {
    this.visible = value;
    this.isVisibleChange.emit(this.visible);
  }

  close() {
    this.isVisible = null;
    this.dismiss.emit();
  }

}
