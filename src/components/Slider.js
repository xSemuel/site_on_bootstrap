import { Carousel } from "react-bootstrap";
import Slide1 from './../image/Slide1.jpg'
import Slide2 from './../image/Slide2.png'
import Slide3 from './../image/Slide3.png'


export function Slider() {
    return ( 
       <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
            <img className="d-block w-100" src={Slide1} alt="water sea" />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus earum vero. Sapiente quod perferendis consequuntur? Soluta earum, repellendus voluptatibus omnis quo obcaecati quidem ab, neque ipsam aliquam rerum velit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img className="d-block w-100" src={Slide2} alt="water sea" />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus earum vero. Sapiente quod perferendis consequuntur? Soluta earum, repellendus voluptatibus omnis quo obcaecati quidem ab, neque ipsam aliquam rerum velit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img className="d-block w-100" src={Slide3} alt="water sea" />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus earum vero. Sapiente quod perferendis consequuntur? Soluta earum, repellendus voluptatibus omnis quo obcaecati quidem ab, neque ipsam aliquam rerum velit.</p>
            </Carousel.Caption>
        </Carousel.Item>
       </Carousel>

    );
}