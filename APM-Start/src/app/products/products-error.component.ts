import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pm-products-error',
  templateUrl: './products-error.component.html',
  styleUrls: ['./products-error.component.css']
})
export class ProductsErrorComponent{

  public pageTitle = "Oof";

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
