import { SucessDataContainer, SucessPageContainer, SucessPageData, ProductListContainer, ProductList } from "./SucessStyles";
import deliverylogo from "../../assets/delivery.png"
import { CurrencyDollar, HourglassSimpleLow, NavigationArrow } from "phosphor-react";
import { AddToCartContex } from "../../components/ChecoutContex/ContexCart";
import { useContext } from "react";



export function Sucess() {

  const { datapurchase, cartItem } = useContext(AddToCartContex)

  return (
    <div>
      <SucessPageContainer>
        <SucessPageData>
          <h1>Uhu! Pedido Confirmado</h1>
          <span style={{ 'marginTop': '-40px' }}>Numero do seu pedido: <strong>1982739</strong></span>
          {
            <SucessDataContainer >
              {datapurchase.map((data, indice) => (
                <>
                  <div key={data.cep} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} >
                    <NavigationArrow size={32}
                      style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px' }} />
                    <span> Entraga em rua   <strong>{data.addressroad}, {data.addressnumber}, {data.addressstate} - {data.addressdistrict}</strong> </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <HourglassSimpleLow size={32}
                      style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px' }} />
                    <span> Previsão de entrega de 15 dias uteis</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CurrencyDollar size={32}
                      style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px' }} />
                    <span> Pagamento na entrega com <strong> {data.payment}</strong> </span>
                  </div>

                </>
              )
              )}
            </SucessDataContainer>
          }
          <h3>Lista de Pedido</h3>
          <ProductListContainer>
            <ProductList>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PRODUTO</th>
                    <th>QUANTIDADE</th>
                    <th>PRECO</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem.map(item => (
                    <tr key={item.id}>
                      <td >{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  )
                  )}
                </tbody>
              </table>
            </ProductList>
          </ProductListContainer>

        </SucessPageData>


        <SucessPageData>
          <img src={deliverylogo} alt="" />
        </SucessPageData>
      </SucessPageContainer>
    </div >
  )
}