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
    }
})

export const Ideas = new Mongo.Collection('ideas');