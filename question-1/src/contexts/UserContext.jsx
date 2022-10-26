import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [cardNum, setCardNum] = useState("################");
  const [cardHolder, setCardHolder] = useState("");
  const [month, setMonth] = useState("");
  const [cvv, setCvv] = useState();
  const [cardFlip, setCardFlip] = useState(false);
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [cellNum, setCellNum] = useState("")
  const [img, setImg] = useState("")

  

  return (
    <UserContext.Provider
      value={{
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
        address, setAddress,
        cellNum,
        setCellNum,
        img,
        setImg
        //handleCardNum,
        //handleCardHolder,
        //handleMonth,
        //handleCvv,
        //flip,
        //handleAddress,
        //handleCellNo
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
