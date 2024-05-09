import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  youtubeLink = 'https://www.youtube.com/channel/UCStxEl2RWG-pID971w5amTw'; // Replace with your actual YouTube channel URL
  emailAddress = 'dattran278005@gmail.com';
constructor(public router:Router){

}

onHome(){
  window.scrollTo({top:0,behavior:'smooth'})
    }

    onAbout(){
  
      this.router.navigate(['./portfolio-website/about'])
    }
    onContact(){
  
      this.router.navigate(['./portfolio-website/contact'])
    }
}
