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

angular.module('components').component('myTest', {
    template: `Test`
});

platformBrowserDynamic().bootstrapModule(AppModule);
