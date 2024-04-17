import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        Welcome to angular training
    `,
    styles: [
        `
            :host {
                background: linear-gradient(120deg, #b92c8e, #662177);
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                color: #FEBD17;
            }
        `
    ],
    standalone: true
})
export class AppComponent {}
