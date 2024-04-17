import {Component, Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Component({
    selector: 'app',
    template: `Welcome to angular training <my-test />`,
})
export class AppComponent {}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'my-test',
})
export class CustomViewCalendarDirective extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super('myTest', elementRef, injector);
    }
}
