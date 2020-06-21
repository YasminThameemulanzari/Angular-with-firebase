import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {

  employeesList: Employee[];
  emplist;

  constructor( private empservice: EmployeeService,
              ) {

  }
  ngOnInit()   {
     this.empservice.getEmployees().subscribe(data => {
       this.employeesList = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as unknown  as Employee;
       })
     });
  }


  onEdit(emp: Employee)  {
    this.empservice.formData = Object.assign({}, emp);
  }

  create(emp: Employee)
  {
    this.empservice.createEmployee(emp);
  }

  update(emp: Employee)
  {
    this.empservice.updateEmployee(emp);
  }

  delete(id: string)
  {
    this.empservice.deleteEmployee(id);
  }


}
