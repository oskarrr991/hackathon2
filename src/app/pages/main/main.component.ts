import { Component, OnInit } from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getUserList().subscribe(response => {
      response.forEach(o => console.log(o.name + ' = '));
    })
  }

}
