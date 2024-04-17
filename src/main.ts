import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
import 'zone.js';
import {downgradeComponent, setAngularJSGlobal} from '@angular/upgrade/static';
import angular from 'angular';
import {AppComponent} from './app.component';

setAngularJSGlobal(angular);
angular.module('components', []);
angular.module('app', ['components']);

angular.module('app').directive('appContainer', downgradeComponent({component: AppComponent}));

angular.module('components').component('myAjsControl', {
    template: `
        <div>
            This is an AngularJS Component
        </div>
        <div>
            The "MyValue" binding got : {{$ctrl.myValue}}
        </div>
        <div>
            The "MyStringValue" binding got : {{$ctrl.myStringValue}}
        </div>
        <div>
            <button ng-click="$ctrl.myFunction()">This button will call "MyFunction"</button>
        </div>
    `,
    bindings: {
        myValue: '<',
        myStringValue: '@',
        myFunction: '&'
    }
});

platformBrowserDynamic().bootstrapModule(AppModule);
