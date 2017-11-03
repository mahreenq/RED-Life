import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Users } from '../../../collections/users.js';
import Profile from './Profile.js';

const PER_PAGE = 20;

class UserList extends Component {
  //props.employees is an array of employee objects
  constructor() {
    super();
  }

//   componentWillMount() {
//     this.page = 1;
//   }

  handleButtonClick() {
    Meteor.subscribe('users', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    return (

        <div className="users-list">
          {this.props.users.map(user => (
            <Profile key={user._id} user={user} />
          ))}
        </div>
        

    );
  }
}
export default createContainer(() => {
  //setup subscription, pass in the publications name
  Meteor.subscribe('users', PER_PAGE); //Whatever is available from the publication will be returned here
  //return an object, whatever that is returned will be available on props for this component
  return {
    users: Users.find({}).fetch()
  }; //We need to call fetch() that will invoke the cursor to actually execute the query
}, UserList);
