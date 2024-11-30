import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrCode';
  public qrBase = '';
  public qrInfo = '';
  public width = 300;
  public name = '';
  public age = 0;

  constructor(route: ActivatedRoute){
    route.queryParams.subscribe(v => {
      console.log('Params = ', v);
      
    })
    
  }

  public ngOnInit(){

  }
  
  public qrupdate(){
    const data = JSON.stringify({name: this.name, age: this.age});
    const meinqr = this.qrBase + '?data=' + data;
    console.log('ql Information =', meinqr);
    this.qrInfo = meinqr;

  }
}
