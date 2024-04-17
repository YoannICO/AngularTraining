import {DoBootstrap, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    providers: [{provide: '$scope', useExisting: '$rootScope'}]
})
export class AppModule implements DoBootstrap {
    constructor(private upgrade: UpgradeModule) {}

    public ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['app'], {strictDi: true});
    }
}
