import { createContext, useState, useEffect} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../config/firebase-config"

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
  const [nameInput, setNameInput] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "products"));
      console.log(data);
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(products)
    
  };
  fetchData();
}, [])

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
        nameInput,
        setNameInput,
        hashValues,
        products
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
