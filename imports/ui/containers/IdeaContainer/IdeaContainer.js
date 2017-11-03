import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Ideas } from '../../../collections/ideas.js';
import Idea from './Idea.js';

const PER_PAGE = 20;

class IdeaList extends Component {
  //props.employees is an array of employee objects
  constructor() {
    super();
  }

//   componentWillMount() {
//     this.page = 1;
//   }

  handleButtonClick() {
    Meteor.subscribe('ideas', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
      console.log(this.props.ideas);
    return (

        <div className="ideas-list">
          {this.props.ideas.map(idea => (
            <Idea key={idea._id} idea={idea} />
          ))}
        </div>
        

    );
  }
}
export default createContainer(() => {
  //setup subscription, pass in the publications name
  Meteor.subscribe('ideas', PER_PAGE); //Whatever is available from the publication will be returned here
  //return an object, whatever that is returned will be available on props for this component
  return {
    ideas: Ideas.find({}).fetch()
  }; //We need to call fetch() that will invoke the cursor to actually execute the query
}, IdeaList);

















// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// //import {connect} from 'react-redux';
// import { Meteor } from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';

// //import { fetchItemsAndUsers, loadTagValues } from '../../redux/modules/items';
// //import { graphql } from 'react-apollo';
// //import gql from 'graphql-tag';

// import Idea from './Idea';

// class IdeaContainer extends Component {
//     componentDidMount() {
//         //let profileId = this.props.match.params.id;
//         //this.props.dispatch(fetchItemsAndUsers(tagValues, profileId));
//     }

//     render() {
//         //let ideaData = this.props.ideaData;

//         let ideaData = [
//             {
//                 title: 'hi',
//                 description: 'buy',
//                 author: 'h',
//                 imageurl: 'yiuy'
//             },

//             {
//                 title: 'hi',
//                 description: 'buy',
//                 author: 'h',
//                 imageurl: 'yiuy'
//             }

//         ]

//         return (
//             <Idea
//                 ideaData={ideaData}
//             />
//         );
//     }
// }

// export default IdeaContainer;

// //export const ideaQuery = gql`
// //     query getItems {
// //         items {
// //             id
// //             title
// //             imageurl
// //             description
// //             itemowner {
// //                 id
// //                 email
// //                 fullname
// //             }
// //             created
// //             borrower {
// //                 fullname
// //             }
// //         }
// //     }
// //`;

// // IdeaContainer.propTypes = {

// // };

// // const mapStateToProps = state => ({
// //     ideaData: state.items.ideaData
// // });

// // export default createContainer(() => {
// //   Meteor.subscribe('ideas');

// //   return {
// //     currentUser: Meteor.user(),
// //     currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
// //     ideas: Ideas.find({}).fetch()
// //   };
// // }, IdeaContainer);

// // const IdeaWrap = createContainer(function() {
// //     Meteor.subscribe('ideas');
// //
// //     return {
// //         currentUser: Meteor.user(),
// //         currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
// //         ideas: Ideas.find({}).fetch()
// //     };
// // }, IdeaContainer);
// //
// // export default connect(mapStateToProps)(IdeaWrap);
