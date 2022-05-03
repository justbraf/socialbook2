import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/collection.js';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.html';

Template.nav.events({
  'click .js-add'() {
    $("#addModal").modal("show");
  }
});

Template.main.events({
  'click .js-saveProfile'() {
    let pic = $("#profPic").val();
    let fname = $("#first").val();
    socialdb.insert({
      "picPath": pic,
      "fname": fname,
      "createdOn": new Date().getTime()
    });
    $("#addModal").modal("hide");
  }
});

Template.profile.helpers({
  profiles() {
    return socialdb.find();
  }
});