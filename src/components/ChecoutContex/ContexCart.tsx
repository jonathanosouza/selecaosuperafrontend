import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../service/api";

export interface products {
  id: number
  name: string
  price: number
  score: string
  image: string
  quantity: number
}

export interface purchase {
  cep: string
  addressroad: string
  addressnumber: string
  addresscomplement: string
  addressdistrict: string
  addressstate: string
  cartitem: [products]
  payment: string
}

export interface cartItem extends products {
  quantity: number
}

interface ProductProps {
  products: products[]
  cartItem: cartItem[]
  productsFiltered: products[]
  datapurchase: purchase[]
  quantity: number
  setDataPurchase: any
  setProductsFiltered: any
  handleAddToCart: (id: number) => void
  handleIncrement: (id: number) => void
  handleDecrement: (id: number) => void
  handleDecrementToCart: (id: number) => void
  handleIncrementToCart: (id: number) => void
  handleDeleteToCart: (id: number) => void
}

interface ProductPropsProviderProps {
  children: ReactNode
}

export const AddToCartContex = createContext({} as ProductProps);
export const CartProvider = ({ children }: ProductPropsProviderProps) => {

  const [item, setItem] = useState<any>([])
  const [cartItem, setCartItem] = useState<cartItem[]>([])
  const [products, setProducts] = useState<products[]>([])
  const [datapurchase, setDataPurchase] = useState<purchase[]>([])
  const [payment, setPayment] = useState()
  const [quantity, setQuantity] = useState(1)
  const [productsFiltered, setProductsFiltered] = useState<any[]>([]);

  async function loadCoffesPage() {
    const response = await api.get('products/?format=json')
    setProducts(response.data.map((product: products) => ({ ...product, quantity: 0 })))
  }

  useEffect(() => {
    loadCoffesPage()
  }, [])

  function handleIncrement(id: number) {
    const allproducts = [...products]
    const productExist = allproducts.find(product => product.id === id)
    if (productExist) {
      productExist.quantity += 1
      setProducts(allproducts)
    }
  }

  function handleDecrement(id: number) {
    let allproducts = [...products]
    const productExist = allproducts.find(product => product.id === id)
    console.log(productExist)
    if (productExist) {
      productExist.quantity -= 1
      setProducts(allproducts)
    }
  }

  function handleAddToCart(id: number) {
    const productExist = products.find(product => product.id === id)
    if (productExist?.id === id) {
      setCartItem([...cartItem, productExist])
    }
    console.log(cartItem)
  }

  function handleDecrementToCart(id: number) {
    const allCartProduct = [...cartItem]
    const produtoExistToCart = cartItem.find(item => item.id == id)
    console.log(produtoExistToCart?.id)

    if (produtoExistToCart) {
      produtoExistToCart.quantity -= 1
      if (produtoExistToCart.quantity <= 0) {
        const cartFiltered = allCartProduct.filter(item => item.id !== id)
        setCartItem(cartFiltered)
      } else {
        setCartItem(allCartProduct)
      }
    }
  }

  function handleIncrementToCart(id: number) {
    const allCartProduct = [...cartItem]
    const produtoExistToCart = cartItem.find(item => item.id == id)
    console.log(produtoExistToCart?.id)

    if (produtoExistToCart) {
      produtoExistToCart.quantity += 1
      setCartItem(allCartProduct)
    }
  }

  function handleDeleteToCart(id: number) {
    const allCartProduct = [...cartItem]
    const productsFilteredItem = allCartProduct.filter(item => item.id == id)
    console.log(productsFilteredItem)
    if (productsFilteredItem) {
      const cartFiltered = allCartProduct.filter(item => item.id !== id)
      setCartItem(cartFiltered)
    }
  }

  return (
    <AddToCartContex.Provider
      value=
      {{
        products,
        cartItem,
        handleAddToCart,
        handleDecrementToCart,
        handleDeleteToCart,
        handleIncrementToCart,
        datapurchase,
        setDataPurchase,
        quantity,
        handleIncrement,
        handleDecrement,
        productsFiltered,
        setProductsFiltered
      }}>{children}
    </AddToCartContex.Provider>
  );

}