import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Admin from './Admin';
import User from './User';

function App() {
  return (
    <div className="flex items-center justify-center py-20">
      {/* <Tabs>
        <TabList className="flex border-b-2 justify-between ">
          <Tab>Users Password</Tab>
          <Tab>Admin Password</Tab>
        </TabList>
        <TabPanel>
          <User />
        </TabPanel>
        <TabPanel>
          <Admin />
        </TabPanel>
      </Tabs> */}
      <div>
        <h3  className="text-blue-700 text-4xl font-semibold ">Password simulation</h3>
        <User />
        <Admin />
      </div>
    </div>
  );
}

export default App;
