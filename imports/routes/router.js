import { Router } from "meteor/iron:router"
import { Posts } from '../api/ingredient.js';
import "../ui/layout/layout.js"
import "../ui/navbar/navbar.js"
import "../ui/listPosts/listIngredients.js"
import "../ui/register/register.js";
import "../ui/home/home.js";
import "../ui/login/login.js";

Router.configure({
    layoutTemplate:"layout"
});

Router.route('/',function(){
    this.render("home");
});

Router.route('/listing',function(){
    this.render("listIngredients");
});

Router.route('/register',function(){
    this.render("register");
});

Router.route('/login',function(){
    this.render("login");
});
