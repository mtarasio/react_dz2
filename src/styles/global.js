
* {
   box-sizing: border-box;
   &::before,
   &::after {
     box-sizing: inherit;
   }
 }
 html {
   font: 16px/1.3 'Mulish', Arial Sans-Serif;
 }
 body {
   margin: 0;
   color: ${color.primaryColor};
   background: #111;
   &.blocked {
     overflow: hidden;
   }
 }
 h1, h2, h3, h4, h5, h6 {
   margin: 0;
 }
 a {
   color: #fff;
   text-decoration: none;
   &:focus {
     outline: none;
   }
 }
 input {
   width: 100%;
   outline: none;
 }
 img {
   max-width: 100%;
   height: auto;
 }
 p {
   margin: 0;
 }
 button {
   outline: none;
   cursor: pointer;
   background: none;
   border: none;
   color: red;
   font-size: 30px;
 }
 ul {
   list-style: none;
   padding: 0;
   margin: 0;
 }
`;

const Application = styled.div`
 display: flex;
 flex-direction: column;
 max-width: 1280px;
 padding: 15px;
 margin: 0 auto;
 min-height: 100vh;
 @media (min-width: 1280px) {
   padding: 30px;
 }
`;

export {
 GlobalStyle,
 Application,
}