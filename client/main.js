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
    let sex = $("#male").prop("checked") ? "male" : "female";
    // if ($("#male").prop("checked")) {
    //   sex = "male";
    // }
    // else {
    //   sex = "female";
    // }
    // socialdb.insert({
    //   "picPath": pic,
    //   "fname": fname,
    //   "createdOn": new Date().getTime()
    // });
    $("#addModal").modal("hide");
  },
  'input #profPic'() {
    let path = $("#profPic").val();
    path = !path ? "unisex-avatar.png" : path;
    $("#displayPic").prop("src", path);
    console.log(path);
  }
});


Template.profile.helpers({
  profiles() {
    return socialdb.find();
  }
});

/*
profile picture
first
last
age
sex
description
*/