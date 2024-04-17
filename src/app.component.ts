import {Component, Directive, ElementRef, Inject, Injector, Input} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'my-ajs-control',
    standalone: true
})
export class MyAjsControlComponentDirective extends UpgradeComponent {
    @Input() public myValue: any;
    @Input() public myStringValue?: string;
    @Input() public myFunction?: () => void;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('myAjsControl', elementRef, injector);
    }
}

@Component({
    selector: 'app',
    template: `
        Welcome to angular training
        <my-ajs-control
            [myValue]="4"
            [myStringValue]="stringValue"
            [myFunction]="onClickButton"
        />
    `,
    imports: [MyAjsControlComponentDirective],
    standalone: true
})
export class AppComponent {
    protected stringValue = 'base';

    constructor(
        @Inject('$scope') private $scope: angular.IScope
    ) {
        this.onClickButton = this.onClickButton.bind(this);
    }

    protected onClickButton() {
        Promise.resolve().then(() => {
            this.stringValue = `${this.stringValue}1`;
        });
    }
}
