// ** Disho ** //

import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';


function Caro() {
  return (
   

   
    <Carousel >
      <Carousel.Item>
      <img src={image1} alt="image1" class="img-fluid"   />
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="image2" class="img-fluid"  />  
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="image3" class="img-fluid"  />  
      </Carousel.Item>
      <Carousel.Item>
      <img src={image4} alt="image4" class="img-fluid"  />  
      </Carousel.Item>
      <Carousel.Item>
      <img src={image5} alt="image5" class="img-fluid"  />  
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;