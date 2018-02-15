import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    titleStyle='red';

    titleStyles = {
        'color': 'red',
        'font-size': '4em'
    }
}
