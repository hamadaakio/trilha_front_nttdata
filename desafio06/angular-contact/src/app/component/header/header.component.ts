import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public toggle: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; })
  {
   if(event.target.innerWidth<=800){
      this.toggle=false;
   }
   else{
    if(!this.toggle){
      this.toggle=true;
     }
   }
  }

  constructor() { }

  ngOnInit(): void {

    if(window.innerWidth <800){
      this.toggle=false;
    }
  }

  toggleClick(){
    this.toggle=!this.toggle;
  }
}
