import { Directive, Input, HostListener, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: "[appDropDown]"
})
export class DropDownDirective implements OnInit {
  //Allow for dynamic setting per component
  //These input properties allow for any implementation of directive to bind developer's chosen value
  defaultColor: string;
  @Input("textColor") text_color: string;
  @Input() background_color: string;
  @Input() border_color: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { 
      this.defaultColor = "transparent";
      this.text_color = "black";
      this.border_color = "black";
      this.background_color = this.defaultColor;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.background_color);
    this.renderer.setStyle(this.elRef.nativeElement, "color", this.text_color);
    this.renderer.setStyle(this.elRef.nativeElement, "border-color", this.border_color);
    this.renderer.setStyle(this.elRef.nativeElement, "box-shadow", "inset 0 3px 5px rgb(0 0 0 / 13%)");

  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");
    this.background_color = this.defaultColor;
  }

}