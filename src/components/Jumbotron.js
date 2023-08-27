import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Slide1 from '../image/Slide1.jpg'


export function Jumbotron() {

    const Styles = styled.div `
        .jumbo {
            background: URL(${Slide1}) no-repeat fixed bottom;
            background-size: cover;
            color: #efefef;
            height: 400px;
            position: relative;
            z-index: -2;
        }
        .overlay {
            background-color: #000;
            opacity: 0.5;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;

        }
    
    `
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                    <Container>
                        <h1>Web Developer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem itaque, ullam sit, est ea beatae dolor, maiores expedita nam corrupti dolores praesentium neque? Consequatur, animi dolorum? Doloribus reprehenderit fuga unde.</p>
                    </Container>
            </Jumbo>
        </Styles>
    )
}