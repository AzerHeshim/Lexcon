import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
declare var $: any;
import * as AOS from 'aos';
import {FormGroup, FormControl } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Lexcon';
  moreOpened: boolean = false;
  selected = ''
  spinning = false;
  checked = false;
  checkedName = false;
  language = '';
  languageAzSelected = false;
  languageRuSelected = false;
  languageEnSelected = true;
  // mailForm = new FormGroup({
  //   first_name: new FormControl(''),
  //   last_name: new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl(''),
  // });
  ifSuccess = false;
  ifError = false;
  openMore(): void{
   this.moreOpened = !this.moreOpened;
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    AOS.init();
    this.language = localStorage.getItem('lang');
    if(localStorage.getItem('lang') === 'az'){
      this.useLanguage('az');
    } else if (localStorage.getItem('lang') === 'en'){
      this.useLanguage('en');
    } else if (localStorage.getItem('lang') === 'ru'){
      this.useLanguage('ru');
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    if (language === 'az'){
      localStorage.setItem('lang', language);
      this.language = localStorage.getItem('lang')
      this.languageAzSelected = true;
      this.languageEnSelected = false;
      this.languageRuSelected = false;
    } else if (language === 'en'){
      localStorage.setItem('lang', language);
      this.language = localStorage.getItem('lang')
      this.languageEnSelected = true;
      this.languageRuSelected = false;
      this.languageAzSelected = false;
    } else if (language === 'ru'){
      localStorage.setItem('lang', language);
      this.language = localStorage.getItem('lang')
      this.languageRuSelected = true;
      this.languageAzSelected = false;
      this.languageEnSelected = false;
    }}
  changeStatus(event: { target: HTMLInputElement }): void{
    // this.checked = !this.checked;
    // // event.target.name = 'checkbox is checked';
    // console.log(event.target.name, event.target.value)
    // if(this.checked === true){
    //   event.target.name = 'checkbox_is_checked';
    //   this.checkedName = event.target.name
    // } else {
    //   event.target.name = 'checkbox_is_not_checked';
    //   this.checkedName = event.target.name
    // }
  }
  onSubmit(e: Event): void{
    e.preventDefault();
    this.spinning = true;
    emailjs.sendForm('service_xekms0g', 'template_uda672q', e.target as HTMLFormElement,  'user_Y1fCbzgmDQDRNUAs0ssy7')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        // this.mailForm.reset();
        this.ifSuccess = true;
        this.ifError = false;
        this.spinning = false;
      }, (error) => {
        console.log(error.text);
        // this.mailForm.reset()
        this.ifSuccess = false;
        this.ifError = true;
        this.spinning = false;
      });
    // console.warn(this.mailForm.value);
  }
}
$(document).on('scroll', function () {
  if ($(document).scrollTop() > 200) {
    $('header').addClass('small');
  } else {
    $('header').removeClass('small');
  }
});

