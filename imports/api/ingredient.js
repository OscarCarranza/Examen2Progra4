export const Ingredients = new Mongo.Collection('ingredients');

let Schema = {};
Schema.ingredient = new SimpleSchema({
  creator: {
    type: String,
    max: 100
  },
  name: {
    type: String,
    max: 100
  },
  description: {
    type: String,
    max: 100
  },
  formula: {
    type: String,
    max: 100
  }

});

Ingredients.attachSchema(Schema.ingredient);

Meteor.methods({
  'ingredients.insert'(ingredient){
      Ingredients.insert(ingredient, function(err){
        if(err)
          throw new Meteor.Error('Error inserting ingredient: ' + err);
      });
   },
   'ingredients.remove'(_id){
     Ingredients.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error deleting ingredient: ' + err);
     });
   }
})
