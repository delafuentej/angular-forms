import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../models/user-setting';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
    originalUserSettings:UserSettings={
    name:null,
    emailOffers:null,
    interfaceStyle:null,
    subscriptionType:null,
    notes:null

  };
  //startDate:Date;
  On:any;
  Off:any;
  singleModel="On"
  //copying form data
    userSettings:UserSettings={...this.originalUserSettings};
    postError= false;
    postErrorMessage='';
    errorResponse!:any;
    subscriptionTypes!:Observable<string[]>;
  constructor(private dataService:DataService) { 
    
  }

  ngOnInit(): void {
    this.subscriptionTypes=this.dataService.getSubscriptionTypes();
    //this.startDate=new Date();
  }
 /*  onHttpError(error:any){
    console.log('error',errorResponse);
    this.postError=true;
    this.postErrorMessage= errorResponse.error.errorMessage;
  } */
  onSubmit(form:NgForm){
    console.log('in onSubmit: ',form.valid);

    if(form.valid){
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        (result:any) => console.log('success',JSON.stringify(result)),
      
        
        (error:any)=> console.log('error',JSON.stringify(error))
      );
    }else{
      this.postError=true;
      this.postErrorMessage="Please fix the above errors"
    }

    }
    
  onBlur(field: NgModel){
    console.log('in onBlur', field.valid)
  }
}
