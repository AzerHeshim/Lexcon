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
  checked = false;
  checkedName = false;
  languageAzSelected = false;
  languageRuSelected = false;
  languageEnSelected = false;
  // mailForm = new FormGroup({
  //   first_name: new FormControl(''),
  //   last_name: new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl(''),
  // });
  openMore(): void{
   this.moreOpened = !this.moreOpened;
  }
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
    if (language === 'az'){
      this.languageAzSelected = true;
      this.languageEnSelected = false;
      this.languageRuSelected = false;
    } else if (language === 'en'){
      this.languageEnSelected = true;
      this.languageRuSelected = false;
      this.languageAzSelected = false;
    } else if (language === 'ru'){
      this.languageRuSelected = true;
      this.languageAzSelected = false;
      this.languageEnSelected = false;
    }}

  ngOnInit(): void {
    AOS.init();
  }
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
    emailjs.sendForm('service_7k1jf6u', 'template_wle7j1j', e.target as HTMLFormElement,  'user_7WOaqFW99JMcBDm8YkZc5')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
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

