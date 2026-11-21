import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoAdminComponent } from './produto-admin.component';

describe('ProdutoAdminComponent', () => {
  let component: ProdutoAdminComponent;
  let fixture: ComponentFixture<ProdutoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoAdminComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
