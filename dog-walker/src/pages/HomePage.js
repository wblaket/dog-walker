import React,  {useState, useEffect} from 'react';
import DogCard from '../pages/DogCard';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const HomePage = () => {

  const  num = Math.floor((Math.random() * 9) + 1);
  return (
    <>
      <div class="centered">
        <DogCard dogID={num}/>
      </div>
    </>
  );
}

export default HomePage;
