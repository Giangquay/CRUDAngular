import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  private productID=0;


  constructor(private activeRouter:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activeRouter.params.subscribe(data =>{
          this.productID=data['id'];
          console.log(this.productID);
          
      })
  }

  public getProductID(): number {
    return this.productID;
  }
}
