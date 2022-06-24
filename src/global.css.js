import { createGlobalStyle } from "styled-components";
import Background from "./assets/images/background.png";

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   :root{
    /* colors */
    --soft-color: #F2F2F2;
    --white: #FFFFFF;
    --question-color: #2F527B;
    --answer-hover: #F9A826;
    --answer-border: rgba(96, 102, 208, 0.8);
    --answer-wrong:  #EA8282;
    --answer-correct: #60BF88;
    --results-title: #1D355D;
    --correct-answers: #6FCF97;
    --try-border: #1D355D;
    /* Fonts */
    --paragraph: 'Montserrat', sans-serif;
    --title: 'Poppins', sans-serif;
   }

   body{
    background: url(${Background}) center center;
    background-size: cover;
   }

   body,html{
    min-height: 100vh;    
   }
`;
