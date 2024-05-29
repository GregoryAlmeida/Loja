import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Headers = styled.header`
  background-color: #0f52ba;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem;
  position: relative;
`;

const Logo = styled.div`
  text-align: center;
`;

const LogoTItle = styled.big`
  font-weight: 900;
  font-size: xx-large;
`;

const ButtonLogo = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 2rem;
  width: 5rem;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  border: none;
  cursor: pointer;
  align-items: center;
  cursor: pointer;
`;

const ContainerProd = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1.5rem 2rem auto;
  justify-content: space-evenly;
`;

const DivProd = styled.div`
  border-radius: 5px;
  width: 15rem;
  margin: 1rem auto;
  margin-left: 1rem;
  box-shadow: 1px 0 3px black;
  padding: 2rem;
  position: relative;
`;

const Img = styled.img`
  text-align: center;
  width: 10rem;
  height: 10rem;
  justify-content: center;
  align-items: center;
`;

const ParaProd = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StrongPrice = styled.strong`
  background-color: #373737;
  color: white;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  height: 2rem;
`;

const StrongName = styled.strong`
  border-radius: 5px;
  padding: 0.5rem;
`;

const ParaDesc = styled.p`
  font-size: smaller;
  margin-bottom: 1rem;
`;

const ButtonProd = styled.button`
  background-color: #0f52ba;
  color: white;
  cursor: pointer;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 15rem;
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarrinhoSec = styled.section`
  background-color: #0f52ba;
  width: 50vw;
  top: 0;
  right: 0;
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  z-index: 1;
  transition: 0.3s;
`;

const DivCar = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  font-size: x-large;
`;

const CarButton = styled.button`
  cursor: pointer;
  background-color: black;
  border-radius: 50%;
  border: none;
  color: white;
  width: 2rem;
  height: 2rem;
`;

const CarFin = styled.button`
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: x-large;
  width: 100%;
  height: 100%;
`;

const ProdCar = styled.div`
  align-items: center;
  display: flex;
  background-color: white;
  width: 100%;
  height: 5rem;
  justify-content: space-around;
  margin-top: 5rem;
  border-radius: 5px;
  font-size: xx-small;
`;

const ImgCar = styled.img`
  width: 50px;
  height: 50px;
`;

const CarPara = styled.p`
  align-items: center;
  text-align: center;
`;

export default function Prodructgrid() {
  const [products, setProducts] = useState([]);
  const [carrinhoProd, setCarrinhoProd] = useState([]);
  const [secCar, setSecCar] = useState(100);

  const getList = async () => {
    await axios
      .get(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC',
      )
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getList();
  }, []);

  const handleClick = async (props) => {
    setCarrinhoProd([
      ...carrinhoProd,
      {
        id: props.id,
        name: props.name,
        photo: props.photo,
        price: props.price,
      },
    ]);
  };

  const handleLogo = () => {
    if (secCar > 0) {
      setSecCar(0);
    } else {
      setSecCar(100);
    }
  };

  return (
    <>
      <Headers>
        <Logo>
          <p>
            <LogoTItle>MKS</LogoTItle> Sistemas
          </p>
        </Logo>
        <Logo>
          <ButtonLogo onClick={handleLogo}>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.59375 0C0.267188 0 0 0.27 0 0.6C0 0.93 0.267188 1.2 0.59375 1.2H2.90937L3.41406 3.09C3.41406 3.12 3.41406 3.15 3.41406 3.15L5.31406 10.32C5.31406 10.32 5.31406 10.32 5.31406 10.35L5.9375 12.75C5.99687 13.02 6.23438 13.2 6.50156 13.2H16.0016C16.3281 13.2 16.5953 12.93 16.5953 12.6C16.5953 12.27 16.3281 12 16.0016 12H6.97656L6.65 10.74L17.2484 10.2C17.5156 10.2 17.7531 9.99 17.8125 9.72L19 3.12C19.0297 2.94 18.9703 2.76 18.8813 2.64C18.7625 2.49 18.5844 2.4 18.4062 2.4H4.45312L3.94844 0.45C3.85938 0.18 3.62188 0 3.35469 0H0.59375ZM7.71875 4.8C8.04531 4.8 8.3125 5.07 8.3125 5.4V7.8C8.3125 8.13 8.04531 8.4 7.71875 8.4C7.39219 8.4 7.125 8.13 7.125 7.8V5.4C7.125 5.07 7.39219 4.8 7.71875 4.8ZM11.2812 4.8C11.6078 4.8 11.875 5.07 11.875 5.4V7.8C11.875 8.13 11.6078 8.4 11.2812 8.4C10.9547 8.4 10.6875 8.13 10.6875 7.8V5.4C10.6875 5.07 10.9547 4.8 11.2812 4.8ZM14.8438 4.8C15.1703 4.8 15.4375 5.07 15.4375 5.4V7.8C15.4375 8.13 15.1703 8.4 14.8438 8.4C14.5172 8.4 14.25 8.13 14.25 7.8V5.4C14.25 5.07 14.5172 4.8 14.8438 4.8ZM7.71875 14.4C6.73906 14.4 5.9375 15.21 5.9375 16.2C5.9375 17.19 6.73906 18 7.71875 18C8.69844 18 9.5 17.19 9.5 16.2C9.5 15.21 8.69844 14.4 7.71875 14.4ZM14.8438 14.4C13.8641 14.4 13.0625 15.21 13.0625 16.2C13.0625 17.19 13.8641 18 14.8438 18C15.8234 18 16.625 17.19 16.625 16.2C16.625 15.21 15.8234 14.4 14.8438 14.4Z"
                fill="black"
              />
            </svg>

            <strong>{carrinhoProd.length}</strong>
          </ButtonLogo>
        </Logo>
      </Headers>

      <ContainerProd>
        <CarrinhoSec style={{ transform: `translateX(${secCar}%)` }}>
          <div>
            <DivCar>
              <h1>Carrinho de Compras</h1>
              <CarButton onClick={handleLogo}>X</CarButton>
            </DivCar>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              {console.log(carrinhoProd)}
              {carrinhoProd.map((props) => (
                <ProdCar key={props.id}>
                  <CarPara>
                    <ImgCar src={props.photo} />
                    {props.name}
                  </CarPara>
                  <CarPara> Qtd:</CarPara>
                  <CarPara> {props.price}</CarPara>
                  <button
                    onClick={() => {
                      setCarrinhoProd([]);
                    }}
                  >
                    X
                  </button>
                </ProdCar>
              ))}
            </div>
          </div>
          <div>
            <DivCar>
              <h1>Total</h1>
              <h1></h1>
            </DivCar>
            <CarFin>Finalizar Compra</CarFin>
          </div>
        </CarrinhoSec>

        {products.map((props) => (
          <DivProd key={props.id}>
            <Img src={props.photo} alt="" />
            <ParaProd>
              <StrongName>{props.name}</StrongName>
              <StrongPrice>R${props.price}</StrongPrice>
            </ParaProd>
            <ParaDesc>{props.description}</ParaDesc>
            <ButtonProd onClick={() => handleClick(props)}>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.737212"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.737212"
                  d="M1 4.375H13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.737212"
                  d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <strong style={{ paddingLeft: '12px' }}>COMPRAR</strong>
            </ButtonProd>
          </DivProd>
        ))}
      </ContainerProd>
    </>
  );
}
