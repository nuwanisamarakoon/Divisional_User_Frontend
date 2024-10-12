import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HomeStyle'


const HeroSection = () => {
    return (
        <div id="Home">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Welcome Galewela Divisional Portfolio Webpage</Title>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection