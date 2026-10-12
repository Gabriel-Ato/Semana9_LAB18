import { TestBed } from '@angular/core/testing';
import { Perro } from './perro';

describe('Perro', () => {
  let service: Perro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Perro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
