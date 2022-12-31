import React from 'react';
import Policies from './Policies';

const App = () => {
    return (

          <div>
      
            <form>
              <input type="text" placeholder="enter name"/>
              <button className="delete">Delete For</button>
            </form>
          <Policies/>
           
          </div>);
};

export default App;