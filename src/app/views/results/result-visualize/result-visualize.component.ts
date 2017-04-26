import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-result-visualize',
  templateUrl: './result-visualize.component.html',
  styleUrls: ['./result-visualize.component.scss']
})
export class ResultVisualizeComponent implements OnInit {
  private processId;
  private fileId;
  private visualizeURL;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private domSanitizer: DomSanitizer,
  ) {
    console.log('results-visualize loaded.');
    this.processId = route.snapshot.parent.parent.params['processId'];
    this.fileId = route.snapshot.parent.params['fileId'];
  }

  ngOnInit() {
    this.visualizeURL = this.domSanitizer
      .bypassSecurityTrustResourceUrl(
      'http://localhost:8080/api/v1/processes/' +
      this.processId + '/results/' + this.fileId + '/visualize');

    // // TODO extract route params using http://stackoverflow.com/questions/43415352/angular-2-extract-multiple-variables-from-url
    // this.params$ = this.route.params
    //   .subscribe((params: Params) => {
    //     this.processId = params['processId'];
    //     this.fileId = params['fileId'];
    //     this.visualizeURL = this.domSanitizer.bypassSecurityTrustResourceUrl('http://localhost:8080/api/v1/processes/15/results/17/visualize');
    //   });
  }

}
