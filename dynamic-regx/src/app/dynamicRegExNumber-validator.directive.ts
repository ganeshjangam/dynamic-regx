import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appDigitDecimaNumber]'
})
export class DigitDecimaNumberDirective {
  @Input() numberLimit: any;
  @Input() decimalLimit: any;
  private regex: RegExp;
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log(this.el.nativeElement.value);
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let regexString = "^\\d{1,Number}(\\.$|\\.\\d{1,Decimal}$|$)";
    regexString = regexString.replace('Number', this.numberLimit);
    regexString = regexString.replace('Decimal', this.decimalLimit);
    this.regex = new RegExp(regexString);
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
    if (next && !(this.regex.test(next))) {
      event.preventDefault();
    }
  }
}