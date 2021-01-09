import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstimativaGastoPage } from './estimativa-gasto.page';

describe('EstimativaGastoPage', () => {
  let component: EstimativaGastoPage;
  let fixture: ComponentFixture<EstimativaGastoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimativaGastoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstimativaGastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
