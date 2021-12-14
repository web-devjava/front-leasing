import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelReadComponent } from './aluguel-read.component';

describe('AluguelReadComponent', () => {
  let component: AluguelReadComponent;
  let fixture: ComponentFixture<AluguelReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluguelReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
