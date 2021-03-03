import { Component } from '@angular/core';
import {User} from './user';
import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics=['Angular', 'React', 'Vue'];

isTopicError:boolean=true;
submitted=false;
errorMsg='';

 userModel =new User('', 'martinho@gmail.com', 999,'default', 'morning', true);

 constructor(private _enrollmentService: EnrollmentService){}

 validateTopic(value)
 {
   this.isTopicError = value=="default"?true:false;

 }

 onSubmit()
 {

  this.submitted=true;
   this._enrollmentService.enroll(this.userModel)
   .subscribe(
     data=>console.log('Success', data),
     error =>this.errorMsg=error.statusText 
    
   );
    
 }
}
