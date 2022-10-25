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
import { cameraOutline } from 'ionicons/icons';
import "./Login.css";

const Login = () => {
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
            <div className="icon-box"><IonIcon icon = {cameraOutline} size= "large"/></div>
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
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
