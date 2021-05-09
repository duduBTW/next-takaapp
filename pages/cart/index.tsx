import { useOrder } from "../_app";
import { CartItem } from "../../styles/cart";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import useTranslation from "next-translate/useTranslation";

import TotalComp from "../../components/cart/TotalComp";

function Cart() {
  let { t, lang } = useTranslation();
  const { orders, removeOrder } = useOrder();

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginRight: "5%",
          flexWrap: "wrap",
        }}
      >
        {orders.length > 0 ? (
          orders.map((item, index) => {
            if (item.info) {
              return (
                <CartItem lang={lang} image={item.info.images[0].url}>
                  <div className="icon" onClick={() => removeOrder(index)}>
                    <IconContext.Provider
                      value={{
                        color: "red",
                        size: "45px",
                        style: {
                          padding: 10,
                        },
                        className: "icon",
                      }}
                    >
                      <AiOutlineClose />
                    </IconContext.Provider>
                  </div>
                  <div className="price">
                    {Number(item.info.price) * item.quantity}
                  </div>
                  {item.description && (
                    <div className="description">{item.description}</div>
                  )}

                  {item.quantity && (
                    <div className="description">
                      {t("cart:quantity")}: {item.quantity}
                    </div>
                  )}
                  <div className="type">{item.info.title}</div>
                </CartItem>
              );
            }
            return null;
          })
        ) : (
          <h1>{t("cart:empty")}</h1>
        )}
      </div>
      <TotalComp />
    </div>
  );
}

export default Cart;
