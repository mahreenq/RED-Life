//Only executed on the server
import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/collections/users';
import _ from 'lodash';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  //Generate Data, but also check to see if data exists first
  //See if collection has any records
  const numberRecords = Users.find({}).count();
  if (!numberRecords) {
    _.times(10, () => {
      //Runs this code 10 times
      const { name, email, phone } = helpers.createCard(); //generates a full profile from faker library

      Users.insert({
        //Saves data to mongodb using Meteor
        name: name,
        email: email,
        phone: phone,
        avatar: image.avatar() //generates an img url
      });
    });
  }

  Meteor.publish('users', function(per_page) {
    //first argument is the publications name, arbitrary name to which we will subscribe to on the client side
    return Users.find({}, { limit: per_page }); //Cursor which means it doesnt execute a query right away, its more of a
    //bookmark that runs only if you tell it to through a publication
  });
});
