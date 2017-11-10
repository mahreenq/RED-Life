import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Avatar from 'material-ui/Avatar';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
const style = {margin: 5};

const recentsIcon = <FontIcon className="material-icons"></FontIcon>;

// console.log(this.props.userId);
// class Footer extends Component {
 
//   render() {
  
//     return (
//       <div>
//         <div>
//                 <Avatar
//                   icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
//                   color={blue300}
//                   backgroundColor={indigo900}
//                   size={30}
//                   style={style}
//                 />
//         </div>
//         <div>
//               <Paper zDepth={1}>
//                 <BottomNavigation>
//                   <BottomNavigationItem
//                     label="Copyright &copy; 2017 Events"
//                     icon={recentsIcon}
//                   />
//                 </BottomNavigation>
//               </Paper>
//         </div>
//       </div>
//     );
//   }
// }

// export default Footer;





const Footer = ({userId, lala}) => {
  
console.log(lala);
  
      return (
        <div>
        <div>
                <Avatar
                  icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
                  color={blue300}
                  backgroundColor={indigo900}
                  size={30}
                  style={style}
                />
        </div>
        <div>
              <Paper zDepth={1}>
                <BottomNavigation>
                  <BottomNavigationItem
                    label="Copyright &copy; 2017 Events"
                    icon={recentsIcon}
                  />
                </BottomNavigation>
              </Paper>
        </div>
      </div>
  )
};
  
  export default Footer;