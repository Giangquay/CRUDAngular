import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-all-product-by-date',
  templateUrl: './view-all-product-by-date.component.html',
  styleUrls: ['./view-all-product-by-date.component.css']
})
export class ViewAllProductByDateComponent implements OnInit{

  private productByDate:string='';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>{
      this.productByDate=data['date'];
    })
  }

  public getProductByDate():string {
    return this.productByDate;
  }
}
