import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrecaophPage } from './correcaoph.page';

describe('CorrecaophPage', () => {
  let component: CorrecaophPage;
  let fixture: ComponentFixture<CorrecaophPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecaophPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrecaophPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
