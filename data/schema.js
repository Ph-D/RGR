import mongoose from 'mongoose';
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';


const ObjectId = mongoose.Types.ObjectId;
ObjectId.prototype.valueOf = function () {
return this.toString();
};

//ACCESS TO MONGO DB
let Schema = (db) => {

    let linkType = new GraphQLObjectType({
        name: 'Link',
        fields: () => ({
            _id: { type: GraphQLString },
            title: { type: GraphQLString },
            url: { type: GraphQLString }
        })
    });
    
    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                links: {
                    type: new GraphQLList(linkType),
                    resolve: () => db.collection("links")
                    .find({}).toArray()
                }
            })
        }),
    
    });

  
    return schema;
}



export default Schema;