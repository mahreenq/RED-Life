import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'admin.insert' (img){
        return Admin.insert({
          image: [img]
        })
    }
})

export const Admin = Meteor.admin;