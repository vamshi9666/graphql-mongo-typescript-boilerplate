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
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
const recipe_1 = require("../entities/recipe");
const user_1 = require("../entities/user");
const recipe_input_1 = require("./types/recipe-input");
const rate_input_1 = require("./types/rate-input");
const object_id_scalar_1 = require("../object-id.scalar");
let RecipeResolver = class RecipeResolver {
    recipe(recipeId) {
        return recipe_1.RecipeModel.findById(recipeId);
    }
    recipes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield recipe_1.RecipeModel.find({});
        });
    }
    addRecipe(recipeInput, { user }) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = new recipe_1.RecipeModel(Object.assign(Object.assign({}, recipeInput), { author: user._id }));
            yield recipe.save();
            return recipe;
        });
    }
    rate(rateInput, { user }) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield recipe_1.RecipeModel.findById(rateInput.recipeId);
            if (!recipe) {
                throw new Error('Invalid recipe ID');
            }
            const newRate = {
                value: rateInput.value,
                user: user._id,
                date: new Date(),
            };
            recipe.ratings.push(newRate);
            yield recipe.save();
            return recipe;
        });
    }
    author(recipe) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield user_1.UserModel.findById(recipe.author));
        });
    }
};
__decorate([
    type_graphql_1.Query((returns) => recipe_1.Recipe, { nullable: true }),
    __param(0, type_graphql_1.Arg('recipeId', (type) => object_id_scalar_1.ObjectIdScalar)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongodb_1.ObjectId]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "recipe", null);
__decorate([
    type_graphql_1.Query((returns) => [recipe_1.Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "recipes", null);
__decorate([
    type_graphql_1.Mutation((returns) => recipe_1.Recipe),
    __param(0, type_graphql_1.Arg('recipe')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipe_input_1.RecipeInput, Object]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "addRecipe", null);
__decorate([
    type_graphql_1.Mutation((returns) => recipe_1.Recipe),
    __param(0, type_graphql_1.Arg('rate')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rate_input_1.RateInput, Object]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "rate", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipe_1.Recipe]),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "author", null);
RecipeResolver = __decorate([
    type_graphql_1.Resolver((of) => recipe_1.Recipe)
], RecipeResolver);
exports.RecipeResolver = RecipeResolver;
//# sourceMappingURL=recipe-resolver.js.map