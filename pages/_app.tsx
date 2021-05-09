import "../styles/globals.css";
import { v4 as uuidv4 } from "uuid";

import { RoutesContainer } from "../styles/layout";
import NavBar from "../components/layout";
import { AppProps } from "next/dist/next-server/lib/router/router";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { CardItemProps } from "../components/data";
import { useRouter } from "next/router";

function getdefData() {
  var data = localStorage.getItem("orders");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

export interface cardPropsContact {
  twitter?: string;
  discord?: string;
  email?: string;
}

export interface cardProps {
  id?: string;
  quantity: number;
  description: string;
  info?: CardItemProps;
}

interface globalProps {
  orders: cardProps[];
  contactInfo: cardPropsContact;
  addOrder: (newOrder: cardProps) => void;
  removeOrder: (index: number) => void;
  cleanOrders: () => void;
  total: number;
  setContactInfo: Dispatch<SetStateAction<cardPropsContact>>;
}

const OrderContext = createContext<globalProps | null>(null);

export const useOrder = () => {
  return useContext<globalProps>(OrderContext);
};

function MyApp({ Component, pageProps }: AppProps) {
  const order = useProviderOrder();
  const history = useRouter();

  useEffect(() => {
    if (history.asPath === "/") history.push("/home");
  }, []);

  return (
    <OrderContext.Provider value={order}>
      <NavBar />
      <RoutesContainer>
        <Component {...pageProps} />
      </RoutesContainer>
    </OrderContext.Provider>
  );
}

function useProviderOrder() {
  const [orders, setOrders] = useState<Array<cardProps>>([]);
  const [contactInfo, setContactInfo] = useState<cardPropsContact>({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setOrders(getdefData());
  }, [setOrders]);

  useEffect(() => {
    let totalTemp = 0;

    for (let i = 0; i < orders.length; i++) {
      const element = orders[i];
      totalTemp += Number(element.info?.price) * element.quantity;
    }

    setTotal(totalTemp);

    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders, setOrders]);

  const addOrder = (newOrder: cardProps) => {
    setOrders([...orders, { ...newOrder, id: uuidv4() }]);
  };

  const removeOrder = (index: number) => {
    const newOrder = orders.filter((item, i) => index !== i);

    setOrders(newOrder);
  };

  const cleanOrders = () => {
    setOrders([]);
  };

  return {
    orders,
    contactInfo,
    addOrder,
    removeOrder,
    total,
    setContactInfo,
    cleanOrders,
  };
}

export default MyApp;
