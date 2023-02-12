import { Minus, Plus, Trash } from "phosphor-react";
import React from "react";
import { PriceContainer } from "../CardProduct/CardProduct";
import { AddOrRemoveContainter, AddToCartChekout, RemoveToCartChekout, SelectedProductContainer, SelectedProduct, TotalConfirmed } from "./CardProductAddCart";
import { useContext, useEffect } from "react";
import { AddToCartContex, CartProvider } from "../ChecoutContex/ContexCart";
import { LineDiv } from "../../pages/Checkout/CheckoutStyles";

export function CardCoffeeAddCart() {

  const { cartItem } = useContext(AddToCartContex)

  return (
    <SelectedProduct>
      {cartItem.map(itens => {
        if (itens.id >= 0)
          return (
            <>
              <SelectedProductContainer>
                <img src={itens.image} alt="" />
                <div>
                  <span>{itens.name}</span>
                  <AddOrRemoveContainter>
                    <AddToCartChekout>
                      <div>
                        <button>
                          <Minus size={14} />
                        </button>
                        {itens['quantity']}
                        <button>
                          <Plus size={14} />
                        </button>
                      </div>
                    </AddToCartChekout>
                    <RemoveToCartChekout>
                      <span><Trash size={18} />Remover</span>
                    </RemoveToCartChekout>
                  </AddOrRemoveContainter>
                </div>
                <p>R$ <PriceContainer>{itens.price}</PriceContainer></p>
              </SelectedProductContainer>
              <div>
                <LineDiv></LineDiv>
              </div>

            </>
          )
      })}
      <TotalConfirmed>
        <div>
          <h3>Total de itens</h3>
          <span>R$ 29,90</span>
        </div>
        <div>
          <h3>Entrega</h3>
          <span>R$ 3,00</span>
        </div>
        <div>
          <strong>Total</strong>
          <span><strong>R$ 29,90</strong></span>
        </div>
        <button> Confirmar Pedido</button>
      </TotalConfirmed>
    </SelectedProduct>
  )
}
