import { TestBed } from '@angular/core/testing';

import { IonDisplayMessagesService } from './ion-display-messages.service';

describe('IonDisplayMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonDisplayMessagesService = TestBed.get(IonDisplayMessagesService);
    expect(service).toBeTruthy();
  });
});
