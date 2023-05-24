import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

    private product:number =0;
    constructor(private activeRouter:ActivatedRoute) {
      
    }
   ngOnInit() {
        this.activeRouter.params.subscribe(data=>{
          this.product = data['id'];
        })
    }

    public getProductID():number
    {
        return this.product;
    }
}
