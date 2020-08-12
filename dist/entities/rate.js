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
const typegoose_1 = require("@typegoose/typegoose");
const src_1 = require("../../../src");
const user_1 = require("./user");
let Rate = class Rate {
};
__decorate([
    src_1.Field(type => src_1.Int),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Number)
], Rate.prototype, "value", void 0);
__decorate([
    src_1.Field(),
    typegoose_1.prop({ default: new Date(), required: true }),
    __metadata("design:type", Date)
], Rate.prototype, "date", void 0);
__decorate([
    src_1.Field(type => user_1.User),
    typegoose_1.prop({ ref: user_1.User, required: true }),
    __metadata("design:type", Object)
], Rate.prototype, "user", void 0);
Rate = __decorate([
    src_1.ObjectType()
], Rate);
exports.Rate = Rate;
//# sourceMappingURL=rate.js.map