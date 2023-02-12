import logotipo from "../../assets/Logo.png"
import { HeaderContainer, Location, LocationContainer } from "./Headerstyles"
import { Coffee, MapPin, ShoppingCart, UserCircle } from "phosphor-react"
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart";
import { Link } from "react-router-dom"
import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { useContext, useEffect, useState } from "react";


export function Header() {
  const { cartItem } = useContext(AddToCartContex)
  const { products, productsFiltered, setProductsFiltered } = useContext(AddToCartContex)
  const [search, setSearch] = useState("");
  useEffect(() => {
    setProductsFiltered(
      products.filter((product) => product.name.toLowerCase().includes(search))
    );
  }, [search]);
  return (
    <HeaderContainer>
      <a href="/"><strong>Tudo Gamer</strong></a>
      <Form.Control
        type="text"
        placeholder="Pesquisar"
        style={{ width: '500px', marginRight: '130px' }}
        value={search}
        onChange={({ target: { value } }) => setSearch(value)} />
      <LocationContainer>
        <a><strong style={{ color: 'green' }}><UserCircle /> Login</strong></a>
        <Location>
          <MapPin size={24} />
          <span> Fortaleza, CE</span>
        </Location>
        <Link to="Checkout">
          <a >
            <ShoppingCart size={20} />
          </a>
        </Link>
        <nav><p>{cartItem.length}</p></nav>
      </LocationContainer>
    </HeaderContainer >
  )
}