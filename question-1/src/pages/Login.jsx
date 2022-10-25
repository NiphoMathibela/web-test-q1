import {
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonIcon,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { cameraOutline } from "ionicons/icons";
import "./Login.css";
import Card from "../components/Card";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext,";

const Login = () => {
  const {
    cardNum,
    setCardNum,
    cardHolder,
    setCardHolder,
    month,
    setMonth,
    cvv,
    setCvv,
    cardFlip,
    setCardFlip,
    message,
    setMessage,
  } = useContext(UserContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className="ion-padding form">
          <div className="img-container">
            <img className="user-img" src="" />
            <div className="icon-box">
              <IonIcon icon={cameraOutline} size="large" />
            </div>
          </div>

          <IonItem>
            <IonInput type="text" placeholder="First name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" placeholder="Last name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" placeholder="Address"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="text" placeholder="Phone number"></IonInput>
          </IonItem>

          <div>
            <Card />
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
