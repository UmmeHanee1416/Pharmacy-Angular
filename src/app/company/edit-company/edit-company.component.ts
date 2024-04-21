import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { DocServiceService } from 'src/app/services/doc-service.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  constructor(public proApi: CompServiceService, private router: Router, private route: ActivatedRoute, private docSer: DocServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByID(this.id);
    this.getAllDoctor();
  }

  doctorList: Doctor[] = [];

  getAllDoctor() {
    this.docSer.getData().subscribe((res: any) => {
      this.doctorList = res;
    })
  }

  compForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    doctorID: new FormControl(''),
    representativeName: new FormControl(''),
    representativeContact: new FormControl(''),
    supplyAddress: new FormControl()
  })

  id!: any;

  product!: any

  getByID(id: any) {
    this.proApi.getById(id).subscribe((val: any) => {
      this.product = val;
      this.compForm.setValue(this.product)
    })
  }


  onsubmit() {
    console.log(this.compForm.value);
    this.proApi.addData(this.compForm.value).subscribe((val: any) => {
      this.router.navigateByUrl('/complist');
    })
  }

}
