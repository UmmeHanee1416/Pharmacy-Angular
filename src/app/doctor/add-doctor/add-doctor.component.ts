import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DocServiceService } from 'src/app/services/doc-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit{
GenericList: any;
companyList: any;
content?: string;

  constructor(public proApi: DocServiceService, private router: Router, private userService: UserServiceService) { }
  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }
  
  
 docForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    specialty: new FormControl(''),
    contact: new FormControl('')
  })

  onsubmit() {
    console.log(this.docForm.value);
    this.proApi.addData(this.docForm.value).subscribe((val: any) => {
      this.router.navigateByUrl('/listdoctor');
    })
  }

}
