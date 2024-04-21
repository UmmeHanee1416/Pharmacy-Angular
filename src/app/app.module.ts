import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { ListCompanyComponent } from './company/list-company/list-company.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SalesComponent } from './sales/sales/sales.component';
import { SalesDetailComponent } from './sales/sales-detail/sales-detail.component';
import { CustomerHomeComponent } from './home/customer-home/customer-home.component';
import { EmployeeHomeComponent } from './home/employee-home/employee-home.component';
import { ProductHomeComponent } from './home/product-home/product-home.component';
import { ReturnHomeComponent } from './home/return-home/return-home.component';
import { ReturntoCompanyaddComponent } from './returned/returnto-companyadd/returnto-companyadd.component';
import { ReturntoCompanyListComponent } from './returned/returnto-company-list/returnto-company-list.component';
import { ReturntoShopAddComponent } from './returned/returnto-shop-add/returnto-shop-add.component';
import { ReturntoShopListComponent } from './returned/returnto-shop-list/returnto-shop-list.component';
import { AddGenericComponent } from './generic/add-generic/add-generic.component';
import { ListGenericComponent } from './generic/list-generic/list-generic.component';
import { EditGenericComponent } from './generic/edit-generic/edit-generic.component';
import { InvoiceComponent } from './customer/invoice/invoice.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ListOfCustomersComponent } from './customer/list-of-customers/list-of-customers.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { EditShopreturnComponent } from './returned/edit-shopreturn/edit-shopreturn.component';
import { EditCompanyreturnComponent } from './returned/edit-companyreturn/edit-companyreturn.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CommonModule } from '@angular/common';
import { DashboardMonthComponent } from './home/dashboard-month/dashboard-month.component';
import { DashboardWeekComponent } from './home/dashboard-week/dashboard-week.component';
import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';
import { EditPurchaseeComponent } from './purchase/edit-purchasee/edit-purchasee.component';
import { ListPurchaseComponent } from './purchase/list-purchase/list-purchase.component';
import { PurchaseHomeComponent } from './home/purchase-home/purchase-home.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { LoginComponent } from './security/login/login.component';
import { SignupComponent } from './security/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    ListDoctorComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    EmployeeDetailComponent,
    NavbarComponent,
    SalesComponent,
    SalesDetailComponent,
    CustomerHomeComponent,
    EmployeeHomeComponent,
    ProductHomeComponent,
    ReturnHomeComponent,
    ReturntoCompanyaddComponent,
    ReturntoCompanyListComponent,
    ReturntoShopAddComponent,
    ReturntoShopListComponent,
    AddGenericComponent,
    ListGenericComponent,
    EditGenericComponent,
    InvoiceComponent,
    EditCustomerComponent,
    ListOfCustomersComponent,
    EditCompanyComponent,
    EditDoctorComponent,
    AddDoctorComponent,
    EditShopreturnComponent,
    EditCompanyreturnComponent,
    DashboardComponent,
    DashboardMonthComponent,
    DashboardWeekComponent,
    AddPurchaseComponent,
    EditPurchaseeComponent,
    ListPurchaseComponent,
    PurchaseHomeComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CanvasJSAngularChartsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
