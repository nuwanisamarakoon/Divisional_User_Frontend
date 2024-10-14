import React, { useState } from 'react';
import { HeroContainer, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, Title } from './HomeStyle';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { carousels } from '../../data/constants'; // Import the carousels data
import Slider from 'react-slick';

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(carousels[0].url);
    const [loopCount, setLoopCount] = useState(0); 

    const settings = {
        dots: false, 
        infinite: true,  
        speed: 1000,  
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 4000,  
        beforeChange: (current, next) => {
          
            const nextIndex = next % carousels.length;
            setCurrentImage(carousels[nextIndex].url);  
    
       
            if (nextIndex === 0) {
                setLoopCount(prevLoopCount => prevLoopCount + 1);
            }
        },
    };
    
    return (
        <div id="Home">
            <HeroContainer style={{
                backgroundImage: `url(${currentImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', 
                position: 'relative',
                zIndex: '1',
            }}>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Welcome to Galewela Divisional Webpage</Title>
                    </HeroLeftContainer>
                    {/* The Slider component is still used to change the images but we won't show it */}
                    <Slider {...settings} style={{ display: 'none' }} /> {/* Hide the slider */}
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
