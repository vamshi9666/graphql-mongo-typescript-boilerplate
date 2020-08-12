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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const mongoose_1 = require("mongoose");
const mongodb_1 = require("mongodb");
const path = __importStar(require("path"));
const type_graphql_1 = require("type-graphql");
const recipe_resolver_1 = require("./resolvers/recipe-resolver");
const rate_resolver_1 = require("./resolvers/rate-resolver");
const helpers_1 = require("./helpers");
const typegoose_middleware_1 = require("./typegoose-middleware");
const object_id_scalar_1 = require("./object-id.scalar");
const MONGO_DB_URL = 'mongodb://localhost:27017/type-graphql';
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mongoose = yield mongoose_1.connect(MONGO_DB_URL);
            yield mongoose.connection.db.dropDatabase();
            const { defaultUser } = yield helpers_1.seedDatabase();
            const schema = yield type_graphql_1.buildSchema({
                resolvers: [recipe_resolver_1.RecipeResolver, rate_resolver_1.RateResolver],
                emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
                globalMiddlewares: [typegoose_middleware_1.TypegooseMiddleware],
                scalarsMap: [{ type: mongodb_1.ObjectId, scalar: object_id_scalar_1.ObjectIdScalar }],
                validate: false,
            });
            const context = { user: defaultUser };
            const server = new apollo_server_1.ApolloServer({ schema, context });
            const { url } = yield server.listen(4000);
            console.log(`Server is running, GraphQL Playground available at ${url}`);
        }
        catch (err) {
            console.error(err);
        }
    });
}
bootstrap();
//# sourceMappingURL=index.js.map