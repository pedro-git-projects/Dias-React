import React from "react";
import lofi from "../img/profile.png";
import styled from 'styled-components';

const AboutSection = () => {
  return(
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Gabriel Dias,</h2>
          </Hide>
          <Hide>
            <h2><span>Illustrator </span> and <span>Concept Artist</span></h2>
          </Hide>
          <Hide>
            <h2>Based In Brazil.</h2>
          </Hide>
        </div>
        <p>Contact Me for Projects and Comissions</p>
        <button>Contact Me</button>
      </Description>
      <Image>
        <img src={lofi} alt="Hardwired Lofi"/>
      </Image>
    </About>
  )
}

//Styled Components 

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color:white;
`

const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2{
  font-weight: lighter;
}
`

const Image = styled.div`
flex:1;
overflow:hidden;
img{
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
`
const Hide = styled.div`
overflow:hidden;
`



export default AboutSection;
