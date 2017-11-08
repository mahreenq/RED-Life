import React from 'react';
import Layout from '../imports/ui/components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../imports/ui/config/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import muiTheme from '../imports/ui/config/theme';
import Ideas from '../imports/ui/containers/IdeaContainer';
import Users from '../imports/ui/containers/UsersContainer';
import CreateIdea from '../imports/ui/containers/CreateIdea';
import SetUpProfile from '../imports/ui/containers/SetUpProfile';
import AccountsUIWrapper from '../imports/ui/components/AccountsWrapper/index';
import NotFound from '../imports/ui/components/NotFound';

const App = () => (
      <div>
        <BrowserRouter>
            <MuiThemeProvider muiTheme={muiTheme}>
            <Layout>
                <Switch>
                    <Route exact path="/login" component={AccountsUIWrapper} />
                    <Route exact path="/setupprofile" component={SetUpProfile} />
                    <Route exact path="/ideas" component={Ideas} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/createidea" component={CreateIdea} />
                    <Route component={NotFound} />
                </Switch>
              </Layout>
            </MuiThemeProvider>
        </BrowserRouter>
      </div>
);

export default App;
