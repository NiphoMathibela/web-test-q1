import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

const ProductCard = (props) => {
  <>
    <IonCard className="productCard">
      <IonCardHeader>
        <div className="product-img">
          <img src={props.img} />
        </div>
      </IonCardHeader>

      <IonCardContent>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>{props.price}</IonCardSubtitle>
      </IonCardContent>
    </IonCard>
  </>;
};

export default ProductCard;
