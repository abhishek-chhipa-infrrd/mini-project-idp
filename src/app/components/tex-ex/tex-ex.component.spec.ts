import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexExComponent } from './tex-ex.component';

describe('TexExComponent', () => {
  let component: TexExComponent;
  let fixture: ComponentFixture<TexExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
