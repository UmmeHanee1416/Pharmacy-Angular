import { Component, OnInit } from '@angular/core';
import { ReturnedProduct } from 'src/app/model/returned-product';
import { ReturnShopServiceService } from 'src/app/services/return-shop-service.service';

@Component({
  selector: 'app-returnto-shop-list',
  templateUrl: './returnto-shop-list.component.html',
  styleUrls: ['./returnto-shop-list.component.scss']
})
export class ReturntoShopListComponent implements OnInit{

  constructor(public proservice: ReturnShopServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  productList: ReturnedProduct[] = [];

  getAll() {
    this.proservice.getData().subscribe((res: any) => {
      this.productList = res;
      console.log(this.productList);
    })
  }

  delete(id: any) {
    this.proservice.deleteByID(id).subscribe((res: any) => {
      alert("Deleted");
      this.getAll()
    });
  }
}
