// Write your Character component here
import React from 'react';
import { Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, CardImg} from 'reactstrap';
import styled from 'styled-components';

function Character(props){
    const  characters  = props.characters;
    console.log(characters);
    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
    `;
 return(
     <Wrapper>
        <Col sm = '15'>
        {characters.map((item, i) => {
        return  <Card key = {i} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} key = {item.id} >
                    <CardImg src={item.image} alt = {item.name} />
                    <CardHeader>
                        <CardTitle>
                            Name: {item.name}
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardSubtitle>
                            Status: {item.status}
                        </CardSubtitle>
                        <CardText>
                            Species: {item.species}
                        </CardText> 
                        <CardText>
                        Known Homeworld and/or Universe: {item.origin.name}
                        </CardText>
                        <CardText>
                            Episode Count: {item.episode.length}
                        </CardText>
                    </CardBody>
                </Card>
        })
        }
        </Col>
    </Wrapper>
    )
}
export default Character;