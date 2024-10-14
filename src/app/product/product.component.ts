import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: any;
  id: any;
  constructor(private cs: CartService, private rs: ActivatedRoute) { }
  ngOnInit() {
    this.rs.params.subscribe((v)=>this.id= v['id']);
    this.cs.getSpecificData(this.id).subscribe((res)=>{
      this.product = res;
      console.log(this.product);
    })
  }
  addCart(pro: any) {
    this.cs.addToCart(pro);
  }
      
}
