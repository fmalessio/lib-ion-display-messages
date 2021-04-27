import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonDisplayMessagesComponent } from './ion-display-messages.component';

@NgModule({
  declarations: [IonDisplayMessagesComponent],
  imports: [
    CommonModule
  ],
  exports: [IonDisplayMessagesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IonDisplayMessagesModule { }
