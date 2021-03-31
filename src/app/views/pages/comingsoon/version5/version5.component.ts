import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MailChimpService } from '../../../../shared/services/mail-chimp.service';
import { SharedAnimations } from '../../../../shared/animations/shared-animations';
import { Counter } from '../counter.service';


@Component({
  selector: 'app-version5',
  templateUrl: './version5.component.html',
  styleUrls: ['./version5.component.scss'],
  animations:[SharedAnimations]
})
export class Version5Component implements OnInit {



  eventDate="nov 02 ,2019 12:00:00";
message:string;
result:string;

constructor(public timeCounter: Counter,private mailChimp:MailChimpService) { }

  ngOnInit() {
    this.timeCounter.countdown(this.eventDate);
  }
  submitEmailForm(form: NgForm){
  
    this.mailChimp.postEmail(form.value.email)
    .subscribe(res => {
  
     this.message=res.msg;
     this.result=res.result;
     
    }, err => {
      
      this.message=err.msg;
      this.result=err.result;
      
    })
    form.reset();
  }

}
