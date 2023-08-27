"use client";

import styled from "styled-components";

const BarraDeProgresso = styled.div`
/* Group 1 */

position: absolute;
width: 562px;
height: 37px;
left: 479px;
top: 123px;



/* Rectangle 3 */

position: absolute;
left: 32.92%;
right: 46.09%;
top: 35.14%;
bottom: 35.14%;

background: #00B2E5;


/* Rectangle 2 */

position: absolute;
left: 8.72%;
right: 70.28%;
top: 35.14%;
bottom: 35.14%;

background: #00B2E5;


/* Ellipse 2 */

position: absolute;
left: 26.39%;
right: 67.01%;
top: 0%;
bottom: 0%;

background: #00B2E5;


/* Ellipse 5 */

position: absolute;
left: 3.02%;
right: 90.38%;
top: 0%;
bottom: 0%;

background: #00B2E5;


/* Ellipse 6 */

position: absolute;
left: 75.86%;
right: 17.55%;
top: 0%;
bottom: 0%;

background: #D9D9D9;


/* Ellipse 7 */

position: absolute;
left: 52.49%;
right: 40.91%;
top: 0%;
bottom: 0%;

background: #D9D9D9;


/* Rectangle 4 */

position: absolute;
left: 58.19%;
right: 20.82%;
top: 35.14%;
bottom: 35.14%;

background: #D9D9D9;

`;

export default function FunBarraDeProgresso() {
  return <BarraDeProgresso>
    <div className={styled.div}></div>
    <div className="Rectangle 2"></div>
    <div className="Group 1"></div>
    <div className="Group 1"></div>
  </BarraDeProgresso>;
}
