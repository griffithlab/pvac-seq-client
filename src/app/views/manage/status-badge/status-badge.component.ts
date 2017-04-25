import { Component, Input } from '@angular/core';

@Component({
  selector: 'pvs-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {
  @Input() running: boolean;
  @Input() status: number;

  constructor() { }

}
