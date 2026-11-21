import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutosAdminComponent } from './produtos-admin.component';

describe('ProdutosAdminComponent', () => {
  let component: ProdutosAdminComponent;
  let fixture: ComponentFixture<ProdutosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosAdminComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
