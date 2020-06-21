import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm,Form } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from '../shared/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
              private firestore: AngularFirestore,
              ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form != null) {
     form.reset();
    }

    this.service.formData =     {
      id:null,
      empdept : '',
      empname : '',
      empphone : null,
      empemail : ''

    };
  }


  onSubmit(form: NgForm)
  {
    let data = form.value;
    this.firestore.collection('employees').add(data);
    this.resetForm(form);
    // this.toaster.success('Submitted successfully', 'Register');
    alert("Submitted successfully");
  }


}

