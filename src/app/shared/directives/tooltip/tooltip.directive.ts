import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Overlay, OverlayPositionBuilder, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {TooltipComponent} from './component/tooltip.component';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[tooltip]'})
export class TooltipDirective implements OnInit {

  @Input()
  tooltip: string = undefined;

  overlayRef: OverlayRef;

  constructor(private overlayPositionBuilder: OverlayPositionBuilder, private elementRef: ElementRef, private overlay: Overlay) {
  }

  ngOnInit(): void {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.buildStrategy()
    });
  }

  /* Builder */

  buildStrategy(): PositionStrategy {
    return this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -16
      }]);
  }

  /* Listeners */

  @HostListener('mouseenter')
  showTooltip(): void {
    this.overlayRef.attach(new ComponentPortal(TooltipComponent)).instance.text = this.tooltip;
  }

  @HostListener('mouseleave')
  hideTooltip(): void {
    this.overlayRef.detach();
  }
}
