import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { ListCompanyComponent } from './company/list-company/list-company.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { SalesComponent } from './sales/sales/sales.component';
import { SalesDetailComponent } from './sales/sales-detail/sales-detail.component';
import { ReturntoShopAddComponent } from './returned/returnto-shop-add/returnto-shop-add.component';
import { ReturntoShopListComponent } from './returned/returnto-shop-list/returnto-shop-list.component';
import { ReturntoCompanyaddComponent } from './returned/returnto-companyadd/returnto-companyadd.component';
import { ReturntoCompanyListComponent } from './returned/returnto-company-list/returnto-company-list.component';
import { InvoiceComponent } from './customer/invoice/invoice.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListOfCustomersComponent } from './customer/list-of-customers/list-of-customers.component';
import { AddGenericComponent } from './generic/add-generic/add-generic.component';
import { ListGenericComponent } from './generic/list-generic/list-generic.component';
import { EditGenericComponent } from './generic/edit-generic/edit-generic.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';
import { EditPurchaseeComponent } from './purchase/edit-purchasee/edit-purchasee.component';
import { ListPurchaseComponent } from './purchase/list-purchase/list-purchase.component';
import { PurchaseHomeComponent } from './home/purchase-home/purchase-home.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { LoginComponent } from './security/login/login.component';
import { SignupComponent } from './security/signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'emplist',component:ListEmployeeComponent},
  {path:'addEmp',component:AddEmployeeComponent},
  {path:'addEmpDet',component:EmployeeDetailComponent},
  {path:'custadd',component:AddCustomerComponent},
  {path:'custlist',component:ListOfCustomersComponent},
  {path:'saleslist',component:ListCustomerComponent},
  {path:'compadd',component:AddCompanyComponent},
  {path:'complist',component:ListCompanyComponent},
  {path:'compedit/:id',component:EditCompanyComponent},
  {path:'shopretedit/:id',component:EditCompanyComponent},
  {path:'compretedit/:id',component:EditCompanyComponent},
  {path:'empedit/:id',component:EditEmployeeComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'proadd',component:AddProductComponent},
  {path:'prolist',component:ListProductComponent},
  {path:'proedit/:id',component:EditProductComponent},
  {path:'invoice/:id',component:InvoiceComponent},
  {path:'custedit/:id',component:EditCustomerComponent},
  {path:'addsale',component:SalesComponent},
  {path:'addsaledet', component:SalesDetailComponent},
  {path:'custhome', component:ListOfCustomersComponent},
  {path:'emphome', component:ListEmployeeComponent},
  {path:'prohome', component:ListProductComponent},
  {path:'returnhome', component:ReturntoShopListComponent},
  {path:'returnshopadd', component:ReturntoShopAddComponent},
  {path:'returnshoplist', component:ReturntoShopListComponent},
  {path:'returncompadd', component:ReturntoCompanyaddComponent},
  {path:'returncomplist', component:ReturntoCompanyListComponent},
  {path:'addgeneric', component:AddGenericComponent},
  {path:'listgeneric', component:ListGenericComponent},
  {path:'editgen/:id', component:EditGenericComponent},
  {path:'adddoctor', component:AddDoctorComponent},
  {path:'edidoctor/:id', component:EditDoctorComponent},
  {path:'listdoctor', component:ListDoctorComponent},
  {path:'addpur', component:AddPurchaseComponent},
  {path:'editpur/:id', component:EditPurchaseeComponent},
  {path:'listpur', component:ListPurchaseComponent},
  {path:'homepur', component:PurchaseHomeComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
