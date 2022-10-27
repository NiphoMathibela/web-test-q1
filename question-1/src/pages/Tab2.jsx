import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButton,
  IonInput,
  IonIcon,
} from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import "./Tab2.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import ProductCard from "../components/ProductCard";

const Tab2 = () => {
  const { products, cart, setCart } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm)
  };

  const addToCart = (id) => {
    console.log(id);

    products.forEach((item) => {
      if (item.id === id) {
        cart.push(item);
        setCart([...new Set(cart)]);
      }
    });

    console.log("Cart: ", cart);
  };

  const search = () => {

    const searchList = products.filter(
      product => {
        return (
          product
          .productName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        );
      }
    );

    setSearchProducts(searchList);

    console.log("Search", searchProducts)

  }

  const productList = searchProducts.map((item) => (
    <IonCard
      className="product-card"
      key={item.id}>
      <div className="product-img">
        <img src={item.img} />
      </div>
      <h2>{item.productName}</h2>
      <h3>R {item.price}</h3>
      <IonButton onClick={() => addToCart(item.id)}>Add to cart</IonButton>
    </IonCard>
  ));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="searchBar">
          <IonInput
            type="text"
            placeholder="Search product"
            value={searchTerm}
            onIonChange={handleSearch}
          ></IonInput>
          <IonIcon onClick={search} icon={searchOutline} />
        </div>
        {productList}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
