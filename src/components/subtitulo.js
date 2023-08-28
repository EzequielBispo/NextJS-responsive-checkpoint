"use client";

import styled from "styled-components";
import { montserrat } from "@/app/fonts";

const Subtitulo = styled.h2`
  position: absolute;
  text-transform: uppercase;
  width: 382px;
  height: 34px;
  left: 163px;
  top: 268px;

  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  color: #000000;
`;

export default function FunSubtitulo(props) {
  return <Subtitulo className={montserrat.className}>{props.name}</Subtitulo>;
}
