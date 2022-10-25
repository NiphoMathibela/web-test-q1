import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [cardNum, setCardNum] = useState("################");
  const [cardHolder, setCardHolder] = useState("");
  const [month, setMonth] = useState("");
  const [cvv, setCvv] = useState();
  const [cardFlip, setCardFlip] = useState(false);
  const [message, setMessage] = useState("");

  const expSplit = month.split("-");
  const expMonth = expSplit[1];
  const expYear = expSplit[0];

  const handleCardNum = (e) => {
    setCardNum(e.target.value);
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
