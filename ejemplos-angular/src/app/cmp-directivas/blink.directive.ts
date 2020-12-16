import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  @HostBinding('style.backgroundColor') color;
  colorInicial: string = 'white';
  @Input('appBlink') colorFondo: string;
  // intervalId: NodeJS.Timeout;
  intervalId: any;

  constructor() {
  }

  ngOnInit() {
    this.colorFondo = this.colorFondo || 'yellow';
  }

  // @HostListener('click') onClick() {
  //   console.log('Se pulsa')
  // }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.colorFondo)
    this.color = this.colorFondo;
    this.intervalId = setInterval(() => {
      this.color = this.color === this.colorInicial ? this.colorFondo : this.colorInicial;
    }, 500)
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearInterval(this.intervalId);
    this.color = this.colorInicial;
  }
}
