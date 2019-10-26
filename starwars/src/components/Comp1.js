import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, CardTitle, CardText  } from 'reactstrap';
import styled from 'styled-components';


const StyledDiv = styled.div`
display: flex;
width: 4rem;
justify-content: center;
align-items: space-between;
`
const StyledCard = styled(Card)`
height: 2rem;
width: 50%;
`


export default function Comp1() {
const [characters , setCharacters] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`)
    .then((res) => {
    const charArr = res.data.results;
    console.log("Starwars Character", charArr);
    setCharacters(charArr);
    console.log(charArr);
    })
    .catch(error => {
    console.log("data not returned", error)
    })
    }, [])
 

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div>
        {characters.map(char => {
            return <StyledDiv>
                <StyledCard>
                <CardTitle></CardTitle>{char.name}
                <CardText>
                    weight:{char.mass}kg
                </CardText>
                <CardText>
                    height:{char.height}meters
                </CardText>
               </StyledCard>
            </StyledDiv>
        })}

      
    </div>
  );
}


