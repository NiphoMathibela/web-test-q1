import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton } from '@ionic/react';
import './Tab1.css';
import {useContext, useState} from "react"
import {UserContext} from "../contexts/UserContext"
import ProductCard from "../components/ProductCard"


const Tab1 = () => {
    const {products, cart, setCart} = useContext(UserContext)
    

    const addToCart = (id) => {
        console.log(id)

        // [products].map(item => id === item.id ? setCart(prev => [item, ...prev]) : cart)

        products.forEach(item => {
            if(item.id === id){
                cart.push(item)
                setCart([...new Set(cart)])
            }
        })

        console.log("Cart: ", cart)
    }
    console.log("List", products)
    const productList = products.map(item => 
    <IonCard className= "product-card" key= {item.id} img= {item.img} title = {item.productName} price = {item.price}>
        <div className= "product-img"><img src = {item.img}/></div>
        <h2>{item.productName}</h2>
        <h3>R {item.price}</h3>
        <IonButton onClick = {() => addToCart(item.id)}>Add to cart</IonButton>
    </IonCard>)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        {productList}
        <ProductCard/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
