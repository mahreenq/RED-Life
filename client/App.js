import React from 'react';
import Layout from './imports/ui/components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Theme from './imports/ui/config/theme';

const App = () => (
      <div>
        <MuiThemeProvider>
          <Layout>
              <div>Children</div>
          </Layout>
        </MuiThemeProvider>
      </div>
);

export default App;