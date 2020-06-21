import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  constructor(private firestore: AngularFirestore) { }


  getEmployees()  {
     return this.firestore.collection('employees').snapshotChanges();
   }


   createEmployee(emp: Employee){
    return this.firestore.collection('employees').add(emp);
   }

   updateEmployee(emp: Employee){
    delete emp.id;
    this.firestore.doc('employees/' + emp.id).update(emp);
    }

    deleteEmployee(empId: string){
      this.firestore.doc('employees/' + empId).delete();
    }


}
