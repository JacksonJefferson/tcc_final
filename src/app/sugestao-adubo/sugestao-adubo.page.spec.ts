import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SugestaoAduboPage } from './sugestao-adubo.page';

describe('SugestaoAduboPage', () => {
  let component: SugestaoAduboPage;
  let fixture: ComponentFixture<SugestaoAduboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestaoAduboPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SugestaoAduboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
