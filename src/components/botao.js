"use client";

import styled from "styled-components";
import { inter } from "@/app/fonts";

const Botao = styled.button`
  /* button */

  position: absolute;
  width: 534px;
  height: 58px;
  left: 449px;
  top: 872px;

  /* BUTTON-LAYOUT */

  position: absolute;
  width: 534px;
  height: 58px;
  left: 449px;
  top: 872px;

  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.24));
  border-radius: 5px;

  /* Rectangle 16 */

  position: absolute;
  left: 0.08%;
  right: 0.07%;
  top: 0%;
  bottom: 0%;

  background: rgba(217, 217, 217, 0.63);
  border-radius: 6px;

  /* PRÓXIMO */

  position: absolute;
  width: 301px;
  height: 60px;
  left: 644px;
  top: 300px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;

  color: #0092dd;
`;

export default function FunBotao() {
  return <Botao className={inter.className}>proximo</Botao>;
}
