import React, {useState, useEffect} from 'react';
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

const Hero = ({ content }) => {

     const [index, setIndex] = useState(0)
     const [subIndex, setSubIndex] = useState(0)
     const [blink, setBlink] = useState(true)
     const [reverse, setReverse] = useState(false)

     const { frontmatter, rawMarkdownBody } = content;
     const words = frontmatter.palabras;

     // typeWriter
     useEffect(() => {
          if (index === words.length) return

          if (
               subIndex === words[index].length + 1 &&
               index !== words.length - 1 &&
               !reverse
          ) {
               setReverse(true)
               return
          }

          if (subIndex === 0 && reverse) {
               setReverse(false)
               setIndex(prev => prev + 1)
               return
          }

          const timeout = setTimeout(() => {
               setSubIndex(prev => prev + (reverse ? -1 : 1))
          }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)))

          return () => clearTimeout(timeout)
     }, [subIndex, index, reverse])

     // blinker
     useEffect(() => {
          const timeout2 = setTimeout(() => {
               setBlink(prev => !prev)
          }, 500)
          return () => clearTimeout(timeout2)
     }, [blink])


     return (
       <StyledSection id="hero">
         <h2 className="subtitle">
           {frontmatter.entrada} {frontmatter.emoji}
           <br />
           {frontmatter.titulo}
         </h2>
         <h1 className="titulo">
           {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
         </h1>
         <h3 className="subtitle">
           {frontmatter.subtitulo}{" "}
           <span role="img" className="highlighted">
             {frontmatter.subtitleHighlight}
           </span>
         </h3>
         <div className="description">{rawMarkdownBody}</div>
       </StyledSection>
     )
}

export default Hero