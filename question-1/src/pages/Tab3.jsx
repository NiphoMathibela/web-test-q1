import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CartCard from '../components/CartCard';
import './Tab3.css';
import {useContext, useState} from "react"
import {UserContext} from "../contexts/UserContext"


const Tab3 = () => {

  const {cart, setCart} = useContext(UserContext)

  const cartList = cart.map(item => <IonCard className= "product-card" key= {item.id} img= {item.img} title = {item.productName} price = {item.price}>
  <div className= "product-img"><img src = {item.img}/></div>
  <h2>{item.productName}</h2>
  <h3>R {item.price}</h3>
</IonCard>)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cart</IonTitle>
          </IonToolbar>
        </IonHeader>
        {cartList}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
