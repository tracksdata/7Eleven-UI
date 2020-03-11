import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FoodBox from './components/FoodBox';
import Veg from './components/Veg';
import NonVeg from './components/NonVeg';
function App() {

  function renderVeg() {
    let vegItems = ['Dosa', 'Idle', 'Chapati', 'Vada', 'Poori'];
    return vegItems.map((vegItem, idx) => {
      return `${vegItem}`
    })
  }
  return (
    <div className="container">
      <FoodBox title="Veg Items">

        {renderVeg()}

      </FoodBox>

      <FoodBox title="NonVeg Items">
        <NonVeg>
          <h2>Chilli Chicken</h2>
        </NonVeg>
        <NonVeg />
        <NonVeg />
        <NonVeg />
      </FoodBox>



    </div>
  );
}

export default App;
