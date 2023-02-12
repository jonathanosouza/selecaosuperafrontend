import { HomeContainer, InfoContainer, Infortext, ListProductContainer, MeunProduct } from "./Homestyles";
import React from "react";
import cupcoffee from '../../assets/Imagem.png'
import { Cardholder, LockKey, ShieldCheck, ShoppingCart, Truck } from "phosphor-react";
import { CardProduct } from '../../components/CardProduct/CardProducts'
import { useContext, useEffect, useState } from "react";
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart";
import { Col, Input } from "reactstrap";


export function Home() {

  const { products, productsFiltered, setProductsFiltered } = useContext(AddToCartContex)
  const [orderBy, setOrderBy] = useState("todos");

  useEffect(() => {
    setProductsFiltered(products);
  }, [products]);

  useEffect((): any => {
    const productsSorted = [...productsFiltered];
    if (orderBy === "nome") {
      setProductsFiltered(
        productsSorted.sort((a, b) => a.name.localeCompare(b.name))
      );
    }
    if (orderBy === "pais") {
      setProductsFiltered(
        productsSorted.sort((a, b) => a.score.localeCompare(b.score))
      );
    }
    if (orderBy === "dtlanc") {
      setProductsFiltered(
        productsSorted.sort(
          (a, b) =>
            new Date(a.price).getTime() - new Date(b.price).getTime()
        )
      );
    }
    if (orderBy === "todos") {
      productsSorted.sort();
    }
  }, [orderBy]);

  return (
    <div>
      <HomeContainer>
        <InfoContainer>
          <div>
            <h1>A maior loja de Games do Brasil</h1>
            <span>Com os melhores precos, todos os gostos e todos os generos.</span>
          </div>
          <Infortext>
            <div>
              <span><a href=""><Cardholder size={17} /></a> Compras em ate 12x sem juros.</span>
              <span><a href=""><ShieldCheck size={17} /></a> Garantia de 1 ano. </span>
            </div>

            <div>
              <span><a href=""><Truck size={17} /></a>Envio para todo Brasil.</span>
              <span><a href=""><LockKey size={17} /></a>Site seguro na compra.</span>
            </div>
          </Infortext>
        </InfoContainer>
        <img src={cupcoffee} alt="" />
      </HomeContainer>
      <MeunProduct>
        <h1>Nossos Lancamentos</h1>
        <Col md={2}>
          <Input
            name="select"
            type="select"
            value={orderBy}
            className="w-100"
            onChange={({ target: { value } }) => setOrderBy(value)}
          >
            <option disabled value="todos">
              Ordernar por:
            </option>
            <option value="nome">Nome</option>
            <option value="dtlanc">Score</option>
            <option value="pais">Preco</option>
          </Input>
        </Col>
        <ListProductContainer>
          <>
            {productsFiltered.map((product) => (
              <CardProduct
                key={product.id} products={product} />
            ))}
          </>
        </ListProductContainer>
      </MeunProduct>
    </div>
  )
}