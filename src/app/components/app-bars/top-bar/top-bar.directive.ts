import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[gksTopBar]'
})
export class TopBarDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('document:scroll', ['$event']) onScroll(e:any){
    const scrollPosition = window.scrollY;
    scrollPosition > 0 
    ? this.renderer.addClass(this.el.nativeElement, 'elevated')
    : this.renderer.removeClass(this.el.nativeElement, 'elevated')
  }
}
