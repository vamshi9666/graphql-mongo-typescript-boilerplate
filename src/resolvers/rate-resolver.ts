/* eslint-disable import/prefer-default-export */
import { Resolver, FieldResolver, Root } from 'type-graphql';

import { Rate } from '../entities/rate';
import { User, UserModel } from '../entities/user';

@Resolver(() => Rate)
export class RateResolver {
  @FieldResolver()
  async user(@Root() rate: Rate): Promise<User> {
    return (await UserModel.findById(rate.user))!;
  }
}
