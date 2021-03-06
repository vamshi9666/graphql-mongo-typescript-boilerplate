import { ApolloServer } from 'apollo-server';
import { ObjectId } from 'mongodb';
import { connect } from 'mongoose';
import * as path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { User } from './entities/user';
import { seedDatabase } from './helpers';
import { ObjectIdScalar } from './object-id.scalar';
import { RateResolver } from './resolvers/rate-resolver';
import { RecipeResolver } from './resolvers/recipe-resolver';
import { TypegooseMiddleware } from './typegoose-middleware';

export interface Context {
  user: User;
}

// replace with your values if needed
const MONGO_DB_URL =
  'mongodb://newuser:newpass123@ds135750.mlab.com:35750/todo-server';

async function bootstrap() {
  try {
    // create mongoose connection
    const mongoose = await connect(MONGO_DB_URL);

    // clean and seed database with some data
    await mongoose.connection.db.dropDatabase();
    const { defaultUser } = await seedDatabase();

    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      resolvers: [RecipeResolver, RateResolver],
      emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
      // use document converting middleware
      globalMiddlewares: [TypegooseMiddleware],
      // use ObjectId scalar mapping
      scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
      validate: false,
    });

    // create mocked context
    const context: Context = { user: defaultUser };

    // Create GraphQL server
    const server = new ApolloServer({ schema, context });

    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
