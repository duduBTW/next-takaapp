import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import { useOrder } from "../../pages/_app";
import { Total } from "../../styles/cart";

export default function TotalComp() {
  const { orders, total } = useOrder();
  let { t } = useTranslation();
  const history = useRouter();

  return (
    <Total>
      <div className="title">{t("cart:total")}</div>
      <div className="price">{total}</div>
      <button
        onClick={() => {
          if (orders.length > 0) history.push("/contact");
        }}
      >
        {t("cart:next")}
      </button>
      <br />
      <div
        style={{
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#dde3a6",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
        className="desc"
      >
        {t("common:pay")}
      </div>
    </Total>
  );
}
