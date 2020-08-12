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
const mongodb_1 = require("mongodb");
const src_1 = require("../../../src");
const rate_1 = require("./rate");
const user_1 = require("./user");
let Recipe = class Recipe {
};
__decorate([
    src_1.Field(),
    __metadata("design:type", mongodb_1.ObjectId)
], Recipe.prototype, "_id", void 0);
__decorate([
    src_1.Field(),
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    src_1.Field({ nullable: true }),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Recipe.prototype, "description", void 0);
__decorate([
    src_1.Field(type => [rate_1.Rate]),
    typegoose_1.prop({ type: () => rate_1.Rate, default: [] }),
    __metadata("design:type", Array)
], Recipe.prototype, "ratings", void 0);
__decorate([
    src_1.Field(type => user_1.User),
    typegoose_1.prop({ ref: user_1.User, required: true }),
    __metadata("design:type", Object)
], Recipe.prototype, "author", void 0);
Recipe = __decorate([
    src_1.ObjectType()
], Recipe);
exports.Recipe = Recipe;
exports.RecipeModel = typegoose_1.getModelForClass(Recipe);
//# sourceMappingURL=recipe.js.map