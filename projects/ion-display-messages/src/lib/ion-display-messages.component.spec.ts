import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonDisplayMessagesComponent } from './ion-display-messages.component';

describe('IonDisplayMessagesComponent', () => {
  let component: IonDisplayMessagesComponent;
  let fixture: ComponentFixture<IonDisplayMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonDisplayMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonDisplayMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
