import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    background: #FfFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;
export default Global;
