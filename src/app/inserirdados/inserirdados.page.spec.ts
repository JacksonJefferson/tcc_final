import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirdadosPage } from './inserirdados.page';

describe('InserirdadosPage', () => {
  let component: InserirdadosPage;
  let fixture: ComponentFixture<InserirdadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirdadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirdadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
