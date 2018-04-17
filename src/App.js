import React, { Component } from 'react';
import { ReactiveBase} from '@appbaseio/reactivesearch'; 
import './App.css';
import  Calendar from './components/Calendar'
import NumberBox from './components/NumberBox';
import RangeSlider from './components/RangeSlider';
import ResultCard from './components/ResultCard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
          theme={{
            primaryColor: '#FF3A4E',
          }}
        >
          <nav className="nav">
                <div className="title">airbeds</div>
          </nav>
          <div className="left-col">
              <Calendar />
              <NumberBox/>
              <RangeSlider/>
          </div>
              <ResultCard/>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
