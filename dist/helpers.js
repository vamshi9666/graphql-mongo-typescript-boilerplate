"use strict";
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
const recipe_1 = require("./entities/recipe");
const user_1 = require("./entities/user");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const defaultUser = new user_1.UserModel({
            email: "test@github.com",
            nickname: "MichalLytek",
            password: "s3cr3tp4ssw0rd",
        });
        yield defaultUser.save();
        yield recipe_1.RecipeModel.create([
            {
                title: "Recipe 1",
                description: "Desc 1",
                author: defaultUser._id,
                ratings: [
                    { value: 2, user: defaultUser._id },
                    { value: 4, user: defaultUser._id },
                    { value: 5, user: defaultUser._id },
                    { value: 3, user: defaultUser._id },
                    { value: 4, user: defaultUser._id },
                ],
            },
            {
                title: "Recipe 2",
                author: defaultUser._id,
                ratings: [
                    { value: 2, user: defaultUser },
                    { value: 4, user: defaultUser },
                ],
            },
        ]);
        return { defaultUser };
    });
}
exports.seedDatabase = seedDatabase;
//# sourceMappingURL=helpers.js.map