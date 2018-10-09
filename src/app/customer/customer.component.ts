import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      addresses: new FormArray([])
    });
  }

  onSubmit() {
    console.dir(this.customerForm.value);
  }

  cancel(event: Event) {
    event.preventDefault();
    this.customerForm.reset();
  }

  getAddresses(): FormArray {
    return <FormArray>this.customerForm.get('addresses');
  }

  deleteForm(index: number) {
    this.getAddresses().removeAt(index);
  }

  print() {
    console.log('customer form', this.customerForm.value);
  }

  addForm(event: Event) {
    if (event !== null) {
      event.preventDefault();
     }

     const address = new FormControl(null, [Validators.required]);

     this.getAddresses().push(address);
  }
}
