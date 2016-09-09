/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GameLogicService } from './game-logic.service';

describe('Service: GameLogic', () => {
  beforeEach(() => {
    addProviders([GameLogicService]);
  });

  it('should ...',
    inject([GameLogicService],
      (service: GameLogicService) => {
        expect(service).toBeTruthy();
      }));
});
