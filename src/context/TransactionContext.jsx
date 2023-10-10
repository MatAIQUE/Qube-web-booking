import axios from "axios";
import { useAuth } from "./AuthContext";
import { createContext, useContext, useState, useEffect } from "react";

const TransactionContext = createContext();

export function useTransaction() {
  return useContext(TransactionContext);
}

export function TransactionContextProvider({ children }) {
  const [transaction, setTransaction] = useState([]);
  const [selectedTrans, setSelectedTrans] = useState(null);
  const [isLoadingTrans, setIsLoadingTrans] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const mobileNumber = user?.mobileNumber;

  useEffect(() => {
    getTransaction(mobileNumber);
  }, [mobileNumber]);

  const getTransaction = async (mobileNumber) => {
    if (user) {
      setIsLoadingTrans(true);

      try {
        const response = await axios.get(
          `https://pandora-2-0-live.onrender.com/api/getAll/trans/user/${mobileNumber}`
        );

        setTransaction(response.data);
        setIsLoadingTrans(false);
      } catch (error) {
        setError(error);
        setIsLoadingTrans(false);
      }
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        error,
        selectedTrans,
        setSelectedTrans,
        isLoadingTrans,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
