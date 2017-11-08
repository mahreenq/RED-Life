import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons"></FontIcon>;

class Footer extends Component {
  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation>
          <BottomNavigationItem
            label="Copyright &copy; 2017 Events"
            icon={recentsIcon}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;
