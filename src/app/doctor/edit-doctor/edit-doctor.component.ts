import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DocServiceService } from 'src/app/services/doc-service.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit{

  constructor(public proApi: DocServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByID(this.id)
  }
  id!: any;

  docForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    address: new FormControl(''),
    specialty: new FormControl(''),
    contact: new FormControl('')
  })

  onsubmit() {
    this.proApi.addData(this.docForm.value).subscribe({
      next: res => {
        this.router.navigateByUrl('/listdoctor');
      },
      error: res => {
        console.log('Error');
      }
    })
  }

  product!:any

  getByID(id:any){
    this.proApi.getById(id).subscribe((val: any) => {
      this.product = val;      
      this.docForm.setValue(this.product)
  })
}

}
