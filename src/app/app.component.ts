import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lexcon';
  moreOpened: boolean = false
  openMore(): void{
   this.moreOpened = !this.moreOpened;
  }
}
$(document).on('scroll', function () {
  if ($(document).scrollTop() > 200) {
    $('header').addClass('small');
  } else {
    $('header').removeClass('small');
  }
});

