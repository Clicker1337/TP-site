import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Home } from './pages/Home/Home';
import { Cards } from './pages/Cards/Cards'
import { Salad } from './pages/Salad/Salad';
import { Soup } from './pages/Soup/Soup';
import { Chicken } from './pages/Chicken/Chicken';
import { SaladRecipePage } from './pages/SaladRecipes/SaladRecipePage';
import { Profile } from './pages/Profile/Profile';


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/salad"  element={ <Salad/> }/>
        <Route path="/recipe/:id"  element={ <SaladRecipePage/> }/>
        <Route path="/soup"  element={ <Soup/> }/>
        <Route path="/chicken"  element={ <Chicken/> }/>
        <Route path='/cards' element={ <Cards/> } />
        <Route path='/profile' element={ <Profile/> } />
      </Routes>
      </div>
  );
}

export default App;
