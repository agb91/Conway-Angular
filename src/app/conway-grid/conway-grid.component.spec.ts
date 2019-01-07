import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwayGridComponent } from './conway-grid.component';

describe('ConwayGridComponent', () => {
  let component: ConwayGridComponent;
  let fixture: ComponentFixture<ConwayGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConwayGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConwayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
