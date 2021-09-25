import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
declare var $: any;
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Lexcon';
  moreOpened: boolean = false;
  openMore(): void{
   this.moreOpened = !this.moreOpened;
  }
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }

  ngOnInit(): void {
    AOS.init();
  }

}
$(document).on('scroll', function () {
  if ($(document).scrollTop() > 200) {
    $('header').addClass('small');
  } else {
    $('header').removeClass('small');
  }
});

