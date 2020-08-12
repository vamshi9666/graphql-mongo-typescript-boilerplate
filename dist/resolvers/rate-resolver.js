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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../../src");
const rate_1 = require("../entities/rate");
const user_1 = require("../entities/user");
let RateResolver = class RateResolver {
    user(rate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield user_1.UserModel.findById(rate.user));
        });
    }
};
__decorate([
    src_1.FieldResolver(),
    __param(0, src_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_1.Rate]),
    __metadata("design:returntype", Promise)
], RateResolver.prototype, "user", null);
RateResolver = __decorate([
    src_1.Resolver(of => rate_1.Rate)
], RateResolver);
exports.RateResolver = RateResolver;
//# sourceMappingURL=rate-resolver.js.map