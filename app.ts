/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, Http, Inject} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    template: '<h1>Hello {{ name }}</h1>'
})

class MyAppComponent {
    name: string;
    http: Http;

    constructor(@Inject(Http) http) {
        this.http = http;

        var res = this.http.get('https://api.github.com/users/jadekler/repos').map(res => res.json());
        console.log(res);


        this.name = 'Alice';
    }
}

bootstrap(MyAppComponent);