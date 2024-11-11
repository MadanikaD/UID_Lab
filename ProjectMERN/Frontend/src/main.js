import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './elements/home';
import About from './elements/about';
import Contact from './elements/contact';
import Diet from './Components/Diet';
import Login from './Components/login/login';
import Register from './Components/register/register';
import { useLogin } from './Context/LoginContext';
import Profile from './elements/myProfile';
import Recommend from './elements/recommendation';
import Health from './Components/Health';
import Calorie from "./Components/Api-components/calorie"
import Cocktail from "./Components/Api-components/cocktail"
import Excercise from "./Components/Api-components/ex";
import Nutrition from "./Components/Api-components/nutrition"
import Recipe from "./Components/Api-components/recipe"

function Main() {
  const { userToken } = useLogin(); // Access the user value from the context
  useEffect(() => {
    console.log(userToken);
  }, [userToken]);

  return (
    <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={userToken ? <Recommend /> : <Login />} />
          <Route path="/diet" element={userToken ? <Diet /> : <Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/health"  element={<Health/>}>
            <Route path="calorie" element={<Calorie/>} />
            <Route path="cocktail" element={<Cocktail/>} />
            <Route path="exercise" element={<Excercise/>} />
            <Route path="nutrition" element={<Nutrition/>} />
            <Route path="recipe" element={<Recipe/>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default Main;
