import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-result-visualize',
  templateUrl: './result-visualize.component.html',
  styleUrls: ['./result-visualize.component.scss']
})
export class ResultVisualizeComponent implements OnInit {
  private processId: number;
  private fileId: number;
  private visualizeURL: SafeResourceUrl;
  private bokehUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private config: ConfigService,
  ) {
    this.bokehUrl = config.bokehUrl();
    this.processId = route.snapshot.parent.parent.params['processId'];
    this.fileId = route.snapshot.parent.params['fileId'];
  }

  ngOnInit() {
    this.visualizeURL = this.domSanitizer
      .bypassSecurityTrustResourceUrl(
      this.bokehUrl + '/processes/' +
      this.processId + '/results/' + this.fileId + '/visualize');
  }

}
