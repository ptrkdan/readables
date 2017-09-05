import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='container'>
          <div className='header row'>
            <h1 className='col'>Readable</h1>
          </div>
          <ul className='category-list row'>
            <li className='category col'>
                <a href='#'>
                  <div>Category-1</div>
                </a>
            </li>
            <li className='category col'>
                <a href='#'>
                  <div>Category-2</div>
                </a>
            </li>
            <div className='w-100'></div>
            <li className='category col'>
                <a href='#'>
                  <div>Category-3</div>
                </a>
            </li>
            <li className='category col'>
                <a href='#'>
                  <div>Category-4</div>
                </a>
            </li>
            <div className='w-100'></div>
            <li className='category col'>
                <a href='#'>
                  <div>Category-5</div>
                </a>
            </li>
          </ul>
        </div> 
      </div>
    );
  }
}

export default App;
