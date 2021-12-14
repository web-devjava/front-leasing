import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoReadComponent } from './veiculo-read.component';

describe('VeiculoReadComponent', () => {
  let component: VeiculoReadComponent;
  let fixture: ComponentFixture<VeiculoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
