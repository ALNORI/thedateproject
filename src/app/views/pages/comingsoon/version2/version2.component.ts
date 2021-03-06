import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { MailChimpService } from '../../../../shared/services/mail-chimp.service';
import { SharedAnimations } from '../../../../shared/animations/shared-animations';
import { Counter } from '../counter.service';


@Component({
  selector: 'app-version2',
  templateUrl: './version2.component.html',
  styleUrls: ['./version2.component.scss'],
  animations: [SharedAnimations]
})
export class Version2Component implements OnInit {
  eventDate="apr 01 ,2021 12:00:00";
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
