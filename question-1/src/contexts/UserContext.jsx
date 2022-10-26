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
  const [cellNum, setCellNum] = useState("");
  const [img, setImg] = useState("");
  const [name, setNameInput] = useState("");

  const hashValues = (string) => {
    var hash = 0;

    if (string.length == 0) return hash;

    for (let i = 0; i < string.length; i++) {
      let char = string.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }

    return hash;
  };

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
        address,
        setAddress,
        cellNum,
        setCellNum,
        img,
        setImg,
        name,
        setNameInput,
        hashValues,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
