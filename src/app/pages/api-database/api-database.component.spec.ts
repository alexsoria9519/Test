import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDatabaseComponent } from './api-database.component';

describe('ApiDatabaseComponent', () => {
  let component: ApiDatabaseComponent;
  let fixture: ComponentFixture<ApiDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
