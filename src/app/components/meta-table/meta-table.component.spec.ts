import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTableComponent } from './meta-table.component';

describe('MetaTableComponent', () => {
  let component: MetaTableComponent;
  let fixture: ComponentFixture<MetaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
