import React from 'react';
import Layout from '../imports/ui/components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../imports/ui/config/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Theme from './imports/ui/config/theme';

import {Provider} from 'react-redux';
import muiTheme from '../imports/ui/config/theme';
import Idea from '../imports/ui/containers/IdeaContainer';
import Login from '../imports/ui/containers/LoginContainer';
import SignUp from '../imports/ui/containers/SignUpContainer';
import Users from '../imports/ui/containers/Profile';
import CreateIdea from '../imports/ui/containers/CreateIdea';

const App = () => (
      <div>
        <BrowserRouter>
          {/* <Provider> */}
            <MuiThemeProvider muiTheme={muiTheme}>
              <Switch>
                <Layout>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/idea" component={Idea} />
                  <Route exact path="/users" component={Users} />
                  <Route exact path="/createidea" component={CreateIdea} />
      
                  {/* <Route path="/profile/:userid" component={Profile} /> */}
                </Layout>
              </Switch>
            </MuiThemeProvider>
          {/* </Provider> */}
        </BrowserRouter>
      </div>
);

export default App;
