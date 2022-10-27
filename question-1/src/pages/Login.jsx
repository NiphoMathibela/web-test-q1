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
  IonButton,
  IonLabel,
} from "@ionic/react";
import { cameraOutline } from "ionicons/icons";
import "./Login.css";
import Card from "../components/Card";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Camera, CameraResultType } from "@capacitor/camera";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../config/firebase-config"

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
    setImg,
    nameInput,
    setNameInput,
    hashValues,
  } = useContext(UserContext);

  const expSplit = month.split("-");
  const expMonth = expSplit[1];
  const expYear = expSplit[0];

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    var imageUrl = image.webPath;

    setImg(imageUrl);
  };

  const handleCardNum = (e) => {
    setCardNum(e.target.value);
    if (cardNum.length > 16) {
      cardNum.trim();
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
    setCellNum(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleName = (e) => {
    setNameInput(e.target.value);
  };

  const register = async () => {
    setCardHolder(hashValues(cardHolder))
    setCvv(hashValues(cvv))
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "web-test-q1-9694b"), {
      name: nameInput,
      address: address,
      phoneNum: cellNum,
      cardNumber: cardNum,
      cardHolder: cvv,
      expDate: month,

    });
    console.log("Document written with ID: ", docRef.id);

    setNameInput("")
    setAddress("")
    setCellNum("")
    setCvv("")
    setMonth("")
    setCardNum("")
    setCardHolder("")

    window.location.pathname = "/tab1"
  };

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
              <IonIcon icon={cameraOutline} size="large" onClick={takePhoto} />
            </div>
          </div>

          <IonItem>
            <IonInput
              type="text"
              placeholder="Name and surname"
              onIonChange={handleName}
              value={nameInput}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              type="text"
              placeholder="Address"
              value={address}
              onIonChange={handleAddress}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="text"
              placeholder="Phone number"
              value={cellNum}
              onIonChange={handleCellNo}
              maxLength= "10"
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Name on card:</IonLabel>
            <IonInput
              type="text"
              placeholder="Name on the card"
              value={cardHolder}
              onIonChange={handleCardHolder}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              type="text"
              placeholder="Card number"
              value={cardNum}
              onIonChange={handleCardNum}
              maxLength= "16"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="month"
              value={month}
              onIonChange={handleMonth}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              type="text"
              placeholder="CVV"
              value={cvv}
              onIonChange={handleCvv}
              maxLength= "3"
            ></IonInput>
          </IonItem>
          <div className="button-box">
            <IonButton shape="round" onClick= {register}>Register</IonButton>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
