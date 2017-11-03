import React from 'react';


const Idea = ({ idea }) => {
    console.log(idea);
  return (
    <div className="thumbnail">
      <img src={idea.avatar} />
      <div className="caption">
        <h3>{idea.name}</h3>
        <ul className="list-group">
        <li className="list-group-item">Author: {idea.name}</li>
          <li className="list-group-item">Description: {idea.description}</li>
          <li className="list-group-item">Title: {idea.title}</li>
        </ul>
      </div>
    </div>
  );
};

export default Idea;

















// import React from 'react';
// import PropTypes from 'prop-types';

// import './styles.css';

// import IdeaCardList from '../../components/IdeaCardList';

// const Idea = ({ideaData}) => {
//     return (
//         <div className="appContent">
//             {ideaData !== undefined && ideaData.length > 0 ?
//                 <div className="appIdeas">
//                     <IdeaCardList ideaData={ideaData} />
//                 </div>
//             : ''}
//         </div>
//     );
// }

// Idea.propTypes = {

// };

// export default Idea;
