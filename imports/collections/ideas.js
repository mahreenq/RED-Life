import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'ideas.insert' (idea){
        return Ideas.insert({

          title: idea.title,
          description: idea.description,
          picture: idea.picture,
          votes: []

        })
    },

    'ideas.updateVote' (idea) {
        Ideas.update(idea._id, {
          $push: { votes: this.userId },
        });
    },

    'ideas.removeVote' (idea) {
        Ideas.update(idea._id, {
          $pull: { votes: this.userId },
        });
    }

})

export const Ideas = new Mongo.Collection('ideas');

//Meteor.users.update({_id: this.userId}, {$pull: {'profile.experiences': {docId: docId}}});
