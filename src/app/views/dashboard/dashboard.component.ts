import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmationService, Message } from "primeng/components/common/api";

@Component({
  templateUrl: 'dashboard.component.html',
  providers: [ConfirmationService]
})
export class DashboardComponent {
  name: string;
  userResponse: Message[] = [];
  theUserSaid: string;

  constructor(private confirmationService: ConfirmationService) { }

  onChangeEvent({target}) {
    this.name = target.value;
    console.log(this.name);
  }

  greetMe() {

    this.confirmationService.confirm({
      message: ` Hey ${this.name}, do you like pVAC-Seq?`,
      header: 'Greeting',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.userResponse = [];
        this.userResponse.push({ severity: 'info', summary: 'Confirmed', detail: 'I like pVAC-Seq' });
        this.theUserSaid = this.name + " responded " + this.userResponse[0].detail;
      },
      reject: () => {
        this.userResponse = [];
        this.userResponse.push({ severity: 'info', summary: 'Rejected', detail: 'I don\'t really like pVAC-Seq' });
        this.theUserSaid = this.name + " responded " + this.userResponse[0].detail;
      }
    });
  }
}
