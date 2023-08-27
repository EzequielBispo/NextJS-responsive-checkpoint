"use client";

import "src/styles/titulo.css";
import styled from "styled-components";
import { inter } from "@/app/fonts";

const Titulo = styled.h1`
  /* SELECIONAR APÓLICE */

  position: absolute;
  width: 353px;
  height: 39px;
  left: 544px;
  top: 182px;

  font-style: normal;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #000000;
`;

export default function FunTitulo(props) {
  return <Titulo className={inter.className}>{props.name}</Titulo>;
}
