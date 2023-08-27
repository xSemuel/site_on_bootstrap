import { Carousel } from "react-bootstrap";
import Slide1 from './../image/watersea.jpg'

export function Slider() {
    return ( 
       <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src={Slide1} alt="water sea" />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus earum vero. Sapiente quod perferendis consequuntur? Soluta earum, repellendus voluptatibus omnis quo obcaecati quidem ab, neque ipsam aliquam rerum velit.</p>
            </Carousel.Caption>
        </Carousel.Item>
       </Carousel>

    );
}