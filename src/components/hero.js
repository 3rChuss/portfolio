import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
     .title {
          margin-bottom: 0:
     }
     .subtitle {
          margin-top: 0;
     }
     .highlighted  {
          box-shadow: inset 0 -2.5rem 0 #cdf3e1;
     }
`

const Hero = () => {
     return (
          <StyledSection id="hero">
               <h1 className="title">
                    JESUS ABRIL <span role="img" aria-label="emoji">👋</span> <br />
                    Full Stack Web.Dev
               </h1>
               <h2 className="subtitle">
                    diseño y construyo <span role="img" className="highlighted">cosas para la web</span>
               </h2>
               <div className="description">
                    Freelancer Web Develper. Based on the world.
               </div>
          </StyledSection>
     )
}

export default Hero