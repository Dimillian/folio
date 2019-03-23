import * as React from 'react';

import Header from './components/header'
import Home from './components/tabs/home';
import About from './components/tabs/about';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Tabs>
            <TabList>
              <Tab>Home</Tab>
              <Tab>About</Tab>
            </TabList>

            <TabPanel>
              <Home />
            </TabPanel>
            <TabPanel>
              <About />
            </TabPanel>
          </Tabs>
      </div>
    );
  }
}

export default App;
