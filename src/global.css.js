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
    --score-color: #6FCF97;
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

   /* Loader */
   .loader {
      font-size: 10px;
      margin: 50px auto;
      text-indent: -9999em;
      width: 11em;
      height: 11em;
      border-radius: 50%;
      background: var(--answer-hover);
      background: -moz-linear-gradient(left, var(--answer-hover) 10%, rgba(255, 255, 255, 0) 42%);
      background: -webkit-linear-gradient(left, var(--answer-hover) 10%, rgba(255, 255, 255, 0) 42%);
      background: -o-linear-gradient(left, var(--answer-hover) 10%, rgba(255, 255, 255, 0) 42%);
      background: -ms-linear-gradient(left, var(--answer-hover) 10%, rgba(255, 255, 255, 0) 42%);
      background: linear-gradient(to right, var(--answer-hover) 10%, rgba(255, 255, 255, 0) 42%);
      position: relative;
      -webkit-animation: loadAnimation 1.4s infinite linear;
      animation: loadAnimation 1.4s infinite linear;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      overflow: hidden;
   }
   .loader:before {
      width: 50%;
      height: 50%;
      background: var(--answer-hover);
      border-radius: 100% 0 0 0;
      position: absolute;
      top: 0;
      left: 0;
      content: '';
   }
   .loader:after {
      background: var(--white);
      width: 75%;
      height: 75%;
      border-radius: 50%;
      content: '';
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
   }
   @-webkit-keyframes loadAnimation {
      0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg);
      }
      100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg);
      }
      }
      @keyframes loadAnimation {
      0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg);
      }
      100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg);
      }
   }


   /* Loader */
`;
