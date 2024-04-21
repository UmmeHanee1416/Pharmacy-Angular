import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { DocServiceService } from 'src/app/services/doc-service.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit{


  constructor(public proApi: CompServiceService, private router: Router, private docSer:DocServiceService) { }
  ngOnInit(): void {
    this.getAllDoctor()
  }

  compForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    doctorID: new FormControl(''),
    representativeName: new FormControl(''),
    representativeContact: new FormControl(''),
    supplyAddress: new FormControl()
  })

  doctorList: Doctor[] = [];

  getAllDoctor(){
    this.docSer.getData().subscribe((res:any) => {
      this.doctorList = res;
    })
  }


  onsubmit() {
    console.log(this.compForm.value);
    this.proApi.addData(this.compForm.value).subscribe((val: any) => {
      this.router.navigateByUrl('/complist');
    })
  }



}
