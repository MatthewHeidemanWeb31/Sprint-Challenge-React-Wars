import React from 'react';
import { Col, Card, CardImg } from 'reactstrap';
import styled from 'styled-components';

function Dog(props){
    const  dogImgUrls  = props.dogImgs;
    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
    `;
    return (
        <Wrapper>
            <Col sm = '11'>
            {dogImgUrls.map((dogImg, i) => {
                return (
                    <Card key = {i} >
                        <CardImg src = {dogImg} />
                    </Card>
                )
            })}
            </Col>
        </Wrapper>
    )
}
export default Dog;