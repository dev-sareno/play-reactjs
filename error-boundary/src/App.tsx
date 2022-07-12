import React from 'react';
import './App.css';
import WrapperComponent from './WrapperComponent';

function App() {
  return (
    <div className="App">
      <h1>This is the root component</h1>
      <WrapperComponent text='Child level one' bgColor='red'>
        <WrapperComponent text='Child level two' bgColor='green'>
          <WrapperComponent text='Child level three' bgColor='blue'>
            <WrapperComponent text='Child level four' bgColor='orange' shouldCauseError={true}>
              <div>This is the deepest child</div>
            </WrapperComponent>
          </WrapperComponent>
        </WrapperComponent>
      </WrapperComponent>
    </div>
  );
}

export default App;
