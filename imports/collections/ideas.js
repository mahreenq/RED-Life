import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'ideas.insert' (idea){
        return Ideas.insert({

          title: idea.title,
          description: idea.description,
          picture: idea.picture

        })
    },

    'ideas.updateVote' (idea) {
        console.log('Hi');

        // if (idea.owner !== this.userId) {
        //   throw new Meteor.Error('todos.toggleComplete.not-authorized',
        //     'You are nsot allowed to update to-dos for other users.');
        // }

        //let userId = "Q7vvLzhLisYLvTxNM";
        //let userId = "jseYJYs5noehs8wXC";

        // Ideas.update(idea._id, {
        //   //$set: { votes: this.userId },
        //   $push: { votes: userId },
        // });
    }
})

export const Ideas = new Mongo.Collection('ideas');


// import { Mongo } from 'meteor/mongo';

// export const Ideas = new Mongo.Collection('ideas');

// // allow client to do these things only

// Meteor.methods({

//   'ideas.updateVote' (idea) {
//     // if (idea.owner !== this.userId) {
//     //   throw new Meteor.Error('todos.toggleComplete.not-authorized',
//     //     'You are nsot allowed to update to-dos for other users.');
//     // }

//     let userId = "Q7vvLzhLisYLvTxNM";
//     //let userId = "jseYJYs5noehs8wXC";

//     Ideas.update(idea._id, {
//       //$set: { votes: this.userId },
//       $push: { votes: userId },
//     });
//   },

//   'ideas.insert': function(){
//     return Ideas.insert({
//       createdAt: new Date(),
//       name: 'John Doe in the house',
//       description: '',
//       title: 'Stuff n things',
//       avatar: '',
//       votes: []
//     })
//   }
// });
