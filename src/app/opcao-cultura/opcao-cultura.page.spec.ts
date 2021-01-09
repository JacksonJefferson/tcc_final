import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcaoCulturaPage } from './opcao-cultura.page';

describe('OpcaoCulturaPage', () => {
  let component: OpcaoCulturaPage;
  let fixture: ComponentFixture<OpcaoCulturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcaoCulturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcaoCulturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
