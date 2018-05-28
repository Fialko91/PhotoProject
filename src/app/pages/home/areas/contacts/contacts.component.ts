import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  email: string;
  constructor() { }

  send() {
    console.log(this.email);
  }

  ngOnInit() {
  }

}
