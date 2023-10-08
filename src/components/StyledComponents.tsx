import React from "react";
import styled from "styled-components";

const StyledComponents = () => {
  //Se crea paleta de colores altamente reutilizable
  const paleta = {
    primary: "#2ad72a",
    secondary: "#f02e2e",
    tertiary: "#333fe1",
    quaternary: "#e549e0",
  };

  //Se crea paleta de colores altamente reutilizable para el hover
  const paletaHover = {
    primary: "#0e590e",
    secondary: "#741616",
    tertiary: "#825199",
    quaternary: "#859314",
  };

  /*Se crea funcion para retornar las propiedades de "Transition" de CSS para que sae altamente reutilizable, 
  lo unico que cambiaria cada vez que se la llame sea su tiempo de ejecucion definido en el llamado a la funcion*/
  const transitionTime = (time: string) => `all ${time} ease-in-out`;

  //Se crean los diferentes etiquetas segun lo que ya viene definido en Styled Components

  const MyH1 = styled.h1`
    padding: 10px;
    text-align: center;
    background-color: ${paleta.primary}; //Se arreglo de paleta de colores
    transition: ${transitionTime("0.5s")};

    //Se pueden recibir de varias maneras propiedades CSS como "props" desde la etiqueda JSX que se esta invocando.
    //De manera condicional, primero se desestructura la prop:
    color: ${({ color }) => color || "#c70909"};

    /*Reciendo la prop de manera completa:
    color: ${(props) => props.color}; */

    /*Desestructurando la props:
    color: ${({ color }) => color}; */

    //Hover
    &:hover {
      background-color: ${paletaHover.primary};
      cursor: pointer;
    }
  `;

  const MyH2 = styled.h2`
    padding: 10px;
    text-align: center;
    background-color: ${paleta.secondary}; //Se arreglo de paleta de colores
    transition: ${transitionTime("1s")};

    &:hover {
      background-color: ${paletaHover.secondary};
      cursor: pointer;
    }
  `;

  const MyH3 = styled.h3`
    padding: 10px;
    text-align: center;
    background-color: ${paleta.tertiary}; //Se arreglo de paleta de colores
    transition: ${transitionTime("1.5s")};

    &:hover {
      background-color: ${paletaHover.tertiary};
      cursor: pointer;
    }
  `;

  const MyH4 = styled.h4`
    padding: 10px;
    text-align: center;
    background-color: ${paleta.quaternary}; //Se arreglo de paleta de colores
    transition: ${transitionTime("1s")};

    &:hover {
      background-color: ${paletaHover.quaternary};
      cursor: pointer;
    }
  `;
  return (
    <div>
      <MyH1 color="#ffffff">Construyendo un h1 con Styled Components</MyH1>
      <MyH2>Construyendo un h2 con Styled Components</MyH2>
      <MyH3>Construyendo un h3 con Styled Components</MyH3>
      <MyH4>Construyendo un h4 con Styled Components</MyH4>
    </div>
  );
};

export default StyledComponents;
