import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { UserData } from 'src/app/interfaces/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Input() key: string = "";

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'type',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Type',
        placeholder: 'Enter user type',
        required: true,
      }
    },
    {
      key: 'url',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'User URL',
        placeholder: 'Enter user url',
        required: true,
      }
    },
    {
      key: 'avatar_url',
      type: 'textarea',
      templateOptions: {
        type: 'text',
        label: 'Avatar url',
        placeholder: 'Avatar url',
        required: true,
      }
    }
  ];


  constructor() { }

  ngOnInit(): void {
    if(this.key === 'update'){
      console.log(this.user);
      this.loadFormData();

    }
  }

  loadData(){

  }

  loadFormData(){
    this.model = {
      _id: this.user._id,
      type: this.user.type,
      url: this.user.url,
      avatar_url: this.user.avatar_url,
    }

  }

  submit(model: any): void {
    console.log('Data ', model);
  }

}
