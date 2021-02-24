"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let FirebaseService = class FirebaseService {
    constructor(http) {
        this.http = http;
        this.url = 'https://nestbackend-21358-default-rtdb.firebaseio.com/datos';
    }
    getAll() {
        return this.http.get(`${this.url}.json`).pipe(operators_1.map(response => response.data));
    }
    getOne(id) {
        return this.http.get(`${this.url}/${id}.json`)
            .pipe(operators_1.map(response => response.data));
    }
    post(elemento) {
        return this.http.post(`${this.url}.json`, elemento)
            .pipe(operators_1.map(response => response.data));
    }
    put(elemento, id) {
        return this.http.put(`${this.url}/${id}.json`, elemento)
            .pipe(operators_1.map(response => response.data));
    }
    delete(id) {
        return this.http.delete(`${this.url}/${id}.json`)
            .pipe(operators_1.map(response => response.data));
    }
};
FirebaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map