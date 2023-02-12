import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CountPrice, ListItem, PriceContainer, TagContainer } from './CardProduct';
import { AddToCart, GoToCart } from '../ButtonCount/ButtonCount';
import { useContext, useState } from 'react';
import { AddToCartContex, CartProvider } from '../ChecoutContex/ContexCart';
import React from "react";


export interface Products {
  id: number
  name: string
  price: number
  score: number
  image: string
  quantity: number
}


interface ProductsProps {
  products: Products
}

export function CardProduct({ products }: ProductsProps) {
  const { handleAddToCart, handleDecrement, handleIncrement } = useContext(AddToCartContex)

  return (
    <ListItem>
      <img src={`${products.image}`} alt="" />
      <TagContainer>
        <h3 key={`${products.id}`}> <span> SCORE: {products.score}</span></h3>
      </TagContainer>
      <h1>{products.name}</h1>
      <CountPrice>
        <p>R$<PriceContainer>{products.price}</PriceContainer></p>
        <AddToCart>
          <button
            onClick={() => handleDecrement(products.id)}
            disabled={products.quantity <= 1}
          >
            <Minus size={14} />
          </button>
          {products.quantity}
          <button
            onClick={() => handleIncrement(products.id)}
          >
            <Plus size={14} />
          </button>
        </AddToCart>
        <GoToCart
          onClick={() => handleAddToCart(products.id)}
        >  <ShoppingCart size={20} />
        </GoToCart>
      </CountPrice>
    </ListItem>
  )
}
