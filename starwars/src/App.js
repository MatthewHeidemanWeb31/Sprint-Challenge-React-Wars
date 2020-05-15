import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {NavItem, Nav, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import Character from './components/Character';
import Dog from './components/Dog';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters ] = useState([]);
  const [ dogImgs, setDogImgs ] = useState([])
  const [activeTab, setActiveTab] = useState('1');
  const rmUrl = 'https://rickandmortyapi.com/api/';
  const dCEOUrl = 'https://dog.ceo/api/breed/hound/basset/images/random/30'
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: white;
    
  `;
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`${rmUrl}character`)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('The data was not retrieved', error);
      })
  }, [])
  useEffect(() => {
    axios
      .get(`${dCEOUrl}`)
      .then(response => {
        console.log(response);
        setDogImgs(response.data.message)
      })
      .catch(error => {
        console.log('The data was not retrieved', error);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Sprint Challenge</h1>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            Rick and Morty Characters
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
              Doggos
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} >
        <TabPane tabId="1">
          <Wrapper>
            <Character characters = {characters} />
          </Wrapper>
        </TabPane>
        <TabPane tabId='2'>
          <Wrapper>
            <Dog dogImgs = {dogImgs}/>
          </Wrapper>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default App;
