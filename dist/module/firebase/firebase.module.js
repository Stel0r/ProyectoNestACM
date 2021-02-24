"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireModule = void 0;
const common_1 = require("@nestjs/common");
const firebase_controller_1 = require("./firebase.controller");
const firebase_service_1 = require("./firebase.service");
const firebase_service_2 = require("../../shared/firebase/firebase.service");
let FireModule = class FireModule {
};
FireModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule],
        controllers: [firebase_controller_1.FireController],
        providers: [firebase_service_1.FireService, firebase_service_2.FirebaseService]
    })
], FireModule);
exports.FireModule = FireModule;
//# sourceMappingURL=firebase.module.js.map