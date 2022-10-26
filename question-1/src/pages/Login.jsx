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
  IonButton
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { cameraOutline } from "ionicons/icons";
import "./Login.css";
import Card from "../components/Card";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Camera, CameraResultType } from '@capacitor/camera';

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
    address,
    cellNum,
    setCellNum,
    setAddress,
    img,
    setImg
    // handleCardNum,
    // handleCardHolder,
    // handleMonth,
    // handleCvv,
    // flip,
    // handleAddress,
    // handleCellNo
  } = useContext(UserContext);

  const expSplit = month.split("-");
  const expMonth = expSplit[1];
  const expYear = expSplit[0];

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    var imageUrl = image.webPath;
  
    setImg(imageUrl)
  };

  const handleCardNum = (e) => {
    setCardNum(e.target.value);
    if(cardNum.length > 16){
      cardNum.trim()
    }
    console.log(cardNum);
  };

  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
    console.log(cardHolder);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
    console.log(month);
  };

  const handleCvv = (e) => {
    setCvv(e.target.value);
    setCardFlip(false);
    console.log(cvv);
  };

  const flip = () => {
    setCardFlip((prev) => !prev);
  };

  const handleCellNo = (e) => {
    setCellNum(e.target.value)
  }

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User setup</IonTitle>
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
            <img className="user-img" src={img} />
            <div className="icon-box">
              <IonIcon icon={cameraOutline} size="large" onClick= {takePhoto}/>
            </div>
          </div>

          <IonItem>
            <IonInput
              type="text"
              placeholder="Name and surname"
              onIonChange= {handleCardHolder}
              value={cardHolder}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              type="text"
              placeholder="Address"
              value={address}
              onIonChange= {handleAddress}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Phone number"
              value={cellNum}
              onIonChange= {handleCellNo}
            ></IonInput>
          </IonItem>

            <IonItem>
              <IonInput
                type="number"
                placeholder="Card number"
                value={cardNum}
                onIonChange = {handleCardNum}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type= "month" value= {month} onIonChange= {handleMonth}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type="number" placeholder="CVV" value={cvv} onIonChange= {handleCvv}></IonInput>
            </IonItem>
            <div className= "button-box"><IonButton shape= "round">Register</IonButton></div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
