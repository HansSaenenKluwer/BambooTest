import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app';
  tooltipOptions: any;

  ngOnInit() {
    this.tooltipOptions = {
      title: 'I am wk-ui Tooltip, buddy',
      position: 'right'
    };
  }
}


