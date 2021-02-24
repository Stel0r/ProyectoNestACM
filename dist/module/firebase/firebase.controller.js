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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireController = void 0;
const common_1 = require("@nestjs/common");
const firebase_service_1 = require("./firebase.service");
let FireController = class FireController {
    constructor(fireService) {
        this.fireService = fireService;
    }
    getAll() {
        return this.fireService.getAll();
    }
    getOne(id) {
        return this.fireService.getOne(id);
    }
    post(datos) {
        return this.fireService.post(datos);
    }
    put(id, datos) {
        return this.fireService.put(id, datos);
    }
    delete(id) {
        return this.fireService.delete(id);
    }
};
__decorate([
    common_1.Get('GetAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FireController.prototype, "getAll", null);
__decorate([
    common_1.Get(':idRegistro'),
    __param(0, common_1.Param('idRegistro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FireController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FireController.prototype, "post", null);
__decorate([
    common_1.Put(':idRegistro'),
    __param(0, common_1.Param('idRegistro')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FireController.prototype, "put", null);
__decorate([
    common_1.Delete(':idRegistro'),
    __param(0, common_1.Param('idRegistro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FireController.prototype, "delete", null);
FireController = __decorate([
    common_1.Controller('fire'),
    __metadata("design:paramtypes", [firebase_service_1.FireService])
], FireController);
exports.FireController = FireController;
//# sourceMappingURL=firebase.controller.js.map