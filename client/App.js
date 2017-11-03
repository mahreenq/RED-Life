import React from 'react';
import Layout from './imports/ui/components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { Provider } from 'react-redux';
//import store from '../../../../client/redux/store';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Theme from './imports/ui/config/theme';
import Idea from './imports/ui/containers/IdeaContainer'

const App = () => (
      <div>
        <MuiThemeProvider>
          <Layout>
              <div><Idea /></div>
          </Layout>
        </MuiThemeProvider>
      </div>
);

export default App;
