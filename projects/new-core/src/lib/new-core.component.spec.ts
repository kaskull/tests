import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoreComponent } from './new-core.component';

describe('NewCoreComponent', () => {
  let component: NewCoreComponent;
  let fixture: ComponentFixture<NewCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
