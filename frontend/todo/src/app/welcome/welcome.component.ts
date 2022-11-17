import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  //ActivatedRoute
  constructor(private route: ActivatedRoute) { }
  name = this.route.snapshot.params['name']
  
  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
  }
}
