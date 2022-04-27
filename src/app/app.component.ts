import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csm';
  colorRed = 'red';
  colorGreen = 'green';
  showGreen = false;
  // showRed = true;
  showMyName(name:string, address:string, ...monalisha){
    console.log(name, address);
    console.log(monalisha.length);
    const names = ["Ajit", "Anirudha"];
    console.log(["Subhra", "Santosh", ...names]);
  }
}
