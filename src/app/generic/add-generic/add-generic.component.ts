import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericServiceService } from 'src/app/services/generic-service.service';

@Component({
  selector: 'app-add-generic',
  templateUrl: './add-generic.component.html',
  styleUrls: ['./add-generic.component.scss']
})
export class AddGenericComponent {

  constructor(private genSer: GenericServiceService, private router: Router) { }

  genericForm: FormGroup = new FormGroup({
    genericName: new FormControl('')
  })
  onsubmit() {
    this.genSer.addData(this.genericForm.value).subscribe((res: any) => {
      this.router.navigateByUrl("/listgeneric")
    })
  }

}
