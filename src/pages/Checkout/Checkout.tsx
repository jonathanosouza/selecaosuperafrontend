import { CodesandboxLogo, CreditCard, CurrencyDollar, MapPin, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import React from "react";
import { CheckoutContainar, FormContainer, FormEntrega, FormEntregaContainer, LineDiv, Payment, PaymentMethod, SelectedProdContainer } from "./CheckoutStyles";
import { PriceContainer } from "../../components/CardProduct/CardProduct";
import { useForm } from "react-hook-form";
import { AddOrRemoveContainter, AddToCartChekout, RemoveToCartChekout, SelectedProductContainer, SelectedProduct, TotalConfirmed } from "../../components/CardProductAddCart/CardProductAddCart";
import { useContext, useState, useMemo } from "react";
import { AddToCartContex, purchase } from "../../components/ChecoutContex/ContexCart";
import { apiCEP } from "../../service/apiCEP";
import { Link } from "react-router-dom";




export function Checkout() {
  const { cartItem, setDataPurchase, datapurchase, handleDecrementToCart, handleIncrementToCart, handleDeleteToCart } = useContext(AddToCartContex)
  const { register, handleSubmit, reset, setValue, setFocus } = useForm()


  const taxaentrega = cartItem.length * 10
  const taxaentregazero = 0

  const cartTotal = useMemo(() => {
    const { total } = cartItem.reduce(
      (accumulator, product) => {
        accumulator.total += product.quantity * product.price;
        return accumulator;
      },
      { total: 0 }
    );
    return total;
  }, [cartItem]);

  function handleAddress(AddressData: purchase) {
    const Finalized = {
      ...AddressData,
      cartItem,
    }
    setDataPurchase([Finalized])
    console.log(datapurchase)
    console.log(datapurchase)
    reset()
  }

  const checkCEP = (e: Event) => {
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)
    apiCEP.get(`/${cep}/json`)
      .then(response => {
        setValue('addressroad', response.data.logradouro);
        setValue('addressdistrict', response.data.bairro)
        setValue('addresscity', response.data.localidade)
        setValue('addressstate', response.data.uf)
        setFocus('addressnumber')
      }
      )
  }

  const TotalSum = cartTotal + taxaentrega

  return (
    <CheckoutContainar>
      <FormContainer>
        <h3>Complete seu pedido</h3>
        <FormEntrega>
          <div>
            <header>
              <MapPinLine size={24} color="orange" />
              <h3> Endereco de entrega</h3>
            </header>
            <span>Informe o endereco onde deseja receber o seu pedido</span>
          </div>
          <FormEntregaContainer>
            <input
              type="text"
              placeholder="CEP"
              {...register('cep')}
              onBlur={checkCEP}
            />
            <input
              type="text"
              placeholder="RUA"
              {...register('addressroad')}
            />
            <header>
              <input
                type="text"
                placeholder="Numero"
                {...register('addressnumber')}
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('addresscomplement')}

              />
            </header>
            <header>
              <input
                type="text"
                placeholder="Bairro"
                {...register('addressdistrict')}
              />
              <input
                type="text"
                placeholder="Cidade"
                {...register('addresscity')}
              />
              <input
                className="uf"
                type="text"
                placeholder="UF"
                {...register('addressstate')}
              />
            </header>
          </FormEntregaContainer>
        </FormEntrega>
        <Payment>
          <div>
            <header>
              <CurrencyDollar size={24} color="orange" />
              <h3> Pagamento</h3>
            </header>
            <span>O pagamento e feito na entrega. Escolha a forma que deseja pagar</span>
          </div>
          <PaymentMethod>
            <ul>
              <CreditCard size={18} color="orange" /> <button value="Cartão Crédito"
                // onClick={handleCredito} 
                {...register('payment')}
              >
                Cartão de Credito
              </button>
              <CreditCard size={18} color="orange" /> <button value="Cartão Débito"
                {...register('payment')}
              >
                Cartão de Débito
              </button>
              <Money size={18} color="orange" /> <button value="Dinheiro"
                {...register('payment')}
              >
                Dinheiro
              </button>
            </ul>
          </PaymentMethod>
        </Payment>
      </FormContainer>
      <SelectedProdContainer>
        <h3>Produtos selecionados</h3>
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
                            <button onClick={() => handleDecrementToCart(itens.id)}>
                              <Minus size={14} />
                            </button>
                            {itens['quantity']}
                            <button onClick={() => handleIncrementToCart(itens.id)}>
                              <Plus size={14} />
                            </button>
                          </div>
                        </AddToCartChekout>
                        <RemoveToCartChekout onClick={() => handleDeleteToCart(itens.id)}  >
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
              <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal as any)}</span>
            </div>
            <div>
              <h3>Entrega</h3>
              {TotalSum < 200 ? <span>R$ {taxaentrega} </span> : <span>R$ {taxaentregazero}</span>}
            </div>
            <div>
              <strong>Total</strong>
              <span><strong>R$ {TotalSum}</strong></span>
            </div>
            <button onClick={handleSubmit(handleAddress)}>
              <Link to="/Sucess">
                Confirmar Pedido
              </Link>
            </button>
          </TotalConfirmed>
        </SelectedProduct>
      </SelectedProdContainer>
    </CheckoutContainar>
  )
}