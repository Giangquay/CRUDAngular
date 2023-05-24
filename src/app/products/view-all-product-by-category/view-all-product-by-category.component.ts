import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit{

 private searchCategory: string="";

  constructor(private activeRouter:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe(data=>{
      this.searchCategory=data['category'];
    })
  }
  public getSearchCategory(): string {
    return  this.searchCategory;
  }

}
