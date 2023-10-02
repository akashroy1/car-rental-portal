import React from 'react';
import './App.css';
import carsData from "./data/cars.json";

// Importing Components
import CarCard from './components/CarCard';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <div className="Home">
      
      <Header />
      
      <div className='bg-blue-50 m-2 grid grid-cols-3 gap-2 rounded-xl'>
        {carsData.map((car, index)=>{
          return <CarCard car={car} key={index} />
        })}
      </div>

      
      <Footer />

    </div>
  );
}

export default App;
