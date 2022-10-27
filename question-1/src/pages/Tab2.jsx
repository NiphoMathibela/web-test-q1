import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonInput } from '@ionic/react';
import './Tab2.css';
import {useContext, useState} from "react"
import {UserContext} from "../contexts/UserContext"
import ProductCard from "../components/ProductCard"


const Tab2 = () => {
    const {products, cart, setCart} = useContext(UserContext)
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (e) => {
      setSearchTerm(e.target.value)
    }
    

    const addToCart = (id) => {
        console.log(id)

        products.forEach(item => {
            if(item.id === id){
                cart.push(item)
                setCart([...new Set(cart)])
            }
        })

        console.log("Cart: ", cart)
    }

    const filteredProducts = products.filter(
      product => {
        return (
          product
          .productName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        );
      }
    );


    console.log("List", products)
    const productList = filteredProducts.map(item => 
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
        <div className= "searchBar"><input type= "text" placeholder= "Search product" value= {searchTerm} onChange={handleSearch}/></div>
        {productList}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
