import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    }
});
