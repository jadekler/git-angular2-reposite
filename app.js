/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var MyAppComponent = (function () {
    function MyAppComponent(http) {
        this.http = http;
        var res = this.http.get('https://api.github.com/users/jadekler/repos').map(function (res) { return res.json(); });
        console.log(res);
        this.name = 'Alice';
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: '<h1>Hello {{ name }}</h1>'
        }),
        __param(0, angular2_1.Inject(angular2_1.Http)), 
        __metadata('design:paramtypes', [Object])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
