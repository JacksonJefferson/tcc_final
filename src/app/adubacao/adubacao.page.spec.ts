import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdubacaoPage } from './adubacao.page';

describe('AdubacaoPage', () => {
  let component: AdubacaoPage;
  let fixture: ComponentFixture<AdubacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdubacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdubacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
