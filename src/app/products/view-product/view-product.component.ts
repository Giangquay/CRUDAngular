import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

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
