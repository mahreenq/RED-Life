import React from 'react';
import Layout from '../imports/ui/components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../imports/ui/config/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Theme from './imports/ui/config/theme';

import {Provider} from 'react-redux';
import muiTheme from '../imports/ui/config/theme';
import Idea from '../imports/ui/containers/IdeaContainer';
import Users from '../imports/ui/containers/UsersContainer';
import CreateIdea from '../imports/ui/containers/CreateIdea';
import SetUpProfile from '../imports/ui/containers/SetUpProfile';
import AccountsUIWrapper from '../imports/ui/components/AccountsWrapper/index';
import NotFound from '../imports/ui/components/NotFound';

const App = () => (
      <div>
        <BrowserRouter>
          {/* <Provider> */}
            <MuiThemeProvider muiTheme={muiTheme}>
              <Switch>
                <Layout>
                  <Route exact path="/login" component={AccountsUIWrapper} />
                  <Route exact path="/setupprofile" component={SetUpProfile} />
                  <Route exact path="/idea" component={Idea} />
                  <Route exact path="/users" component={Users} />
                  <Route exact path="/createidea" component={CreateIdea} />
                  <Route  component={NotFound} />
      
                  {/* <Route path="/profile/:userid" component={Profile} /> */}
                </Layout>
              </Switch>
            </MuiThemeProvider>
          {/* </Provider> */}
        </BrowserRouter>
      </div>
);

export default App;
