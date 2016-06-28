import "./listIngrdients.html";
import { Ingredients } from '../../api/ingreidient.js';

Template.listIngredients.onRendered(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
});
Template.listIngredients.events({
    'click #addPostButton'(event){
      // console.log('user id'+ Meteor.userId());
        let ingreidient = {
            name: $('#name').val(),
            description: $('#description').val(),
            formula: $('#formula').val(),
        };
        name: $('#name').val(),
        description: $('#description').val(),
        formula: $('#formula').val(),
        Meteor.call('ingredients.insert', post)
    },
    'click .delete'() {
        Meteor.call('ingredients.remove', this._id);
    },

})
Template.listIngredients.helpers({
    ingredients(){
        var ingredients = Ingredients.find({creator: Meteor.userId()});
        return ingredients;
    }
});