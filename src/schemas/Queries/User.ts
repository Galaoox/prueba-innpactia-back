import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { Users } from '../../entity/users';
import { UserType } from '../typedefs/User';

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        return await Users.find();
    }
}

export const GET_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: void, args: { id: number }) {
        return await Users.findOne(args.id);
    }
}