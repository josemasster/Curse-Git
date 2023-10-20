import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  firestore: Firestore = inject(Firestore)

  constructor(){

  }

  addData(f:any){
    console.log(f.value);

    const instanceCollection = collection(this.firestore, 'items');
    addDoc(instanceCollection, f.value).then(()=>{
      console.log('Data Saved Sucessfully');
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  updateData(Id:string, firstName:string, lastName:string, document:string, wage:string){
    const InstancesDoc = doc(this.firestore, 'items', Id);
    const updateData = {
      firstName,
      lastName,
      document,
      wage
    }
    updateDoc(InstancesDoc, updateData).then(()=>{
      console.log('Data Update');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  deleteData(id:string){
    const InstancesDoc = doc(this.firestore, 'items', id);
    deleteDoc(InstancesDoc).then(()=>{
      console.log('Data Delete')
    })
    .catch((err)=>{
      console.log(err);
    })

  }
}
