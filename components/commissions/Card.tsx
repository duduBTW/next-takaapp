import React from "react";
// import { config, Spring } from "react-spring/renderprops";
import {
  Button,
  ButtonOutlined,
  ButtonsContainer,
  CardSection,
  Content,
  Input,
  TextArea,
} from "../../styles/commissions";
import { CardItemProps } from "../data";
import { IconContext } from "react-icons/lib";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { animated, useTransition } from "react-spring";
import ImageCard from "./ImageCard";
import useTranslation from "next-translate/useTranslation";

export default function Card({
  content,
  finish,
}: {
  content: CardItemProps;
  finish: (
    quantity: number | string,
    description: string,
    afther: string
  ) => void;
}) {
  const { price, desc, images, features, direction } = content;
  const [reset, setReset] = React.useState(true);
  const [step, setStep] = React.useState(0);
  const { t } = useTranslation();

  const [quantity, setQuantity] = React.useState<string | number>(1);
  const [description, setDescription] = React.useState<string>("");

  const history = useRouter();

  const transitions = useTransition(step, null, {
    unique: true,
    from: {
      opacity: 0,
      transform: "translateX(-50%)",
      position: "absolute",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
      position: "relative",
    },
    leave: {
      opacity: 0,
      transform: "translateX(-50%)",
      position: "absolute",
      // zIndex: -1,
    },
  });

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) {
      setQuantity("");
      return false;
    }
    if (isNaN(Number(value))) return false;

    const v = Number(value);

    if (v < 0 || v > 1000) return false;
    setQuantity(v);
  };

  const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDescription(value);
  };

  const getStep = (itemStep) => {
    switch (itemStep) {
      case 0:
        return (
          <CardSection>
            <div className="price">{price}</div>
            <div className="desc">{desc}</div>
            {features && (
              <ul>
                {features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <div style={{ width: "100%" }}>
              <Button
                onClick={() => {
                  setStep(1);
                  setTimeout(() => setReset(false), 100);
                }}
                className="button"
              >
                Order now
              </Button>{" "}
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
            </div>
          </CardSection>
        );
      case 1:
        return (
          <CardSection>
            <div style={{ fontSize: "2rem" }}>{t("commissions:quantity")}</div>
            <Input
              type="text"
              defaultValue="1"
              name="quantity"
              value={quantity}
              onChange={changeQuantity}
            />
            <ButtonsContainer>
              <ButtonOutlined
                style={{ flex: 1 }}
                onClick={() => {
                  setReset(true);
                  setStep(0);
                }}
                className="button"
              >
                {t("commissions:back")}
              </ButtonOutlined>
              <Button
                style={{ flex: 3 }}
                onClick={() => {
                  if (quantity) {
                    setStep(2);
                    setReset(true);
                    setTimeout(() => setReset(false), 100);
                  }
                }}
                className="button"
              >
                {t("commissions:next")}
              </Button>
            </ButtonsContainer>
          </CardSection>
        );
      case 2:
        return (
          <CardSection>
            <div style={{ fontSize: "2rem" }}>{t("commissions:desc")}</div>
            <TextArea
              onChange={changeDescription}
              rows={10}
              placeholder={t("commissions:descPlaceholder")}
              value={description}
              id=""
            />
            <ButtonsContainer>
              <ButtonOutlined
                style={{ flex: 1 }}
                onClick={() => {
                  setStep(1);
                  setReset(true);
                  setTimeout(() => setReset(false), 100);
                }}
                className="button"
              >
                {t("commissions:back")}
              </ButtonOutlined>
              <Button
                style={{ flex: 3 }}
                onClick={() => setStep(3)}
                className="button"
              >
                {t("commissions:next")}
              </Button>
            </ButtonsContainer>
          </CardSection>
        );
      case 3:
        return (
          <CardSection>
            <div style={{ fontSize: "4rem", textAlign: "center" }}>
              {t("commissions:success")}
            </div>
            <ButtonsContainer>
              <ButtonOutlined
                style={{ flex: 1 }}
                onClick={() => finish(quantity, description, "/commissions")}
                className="button"
              >
                {t("commissions:backCom")}
              </ButtonOutlined>
              <Button
                style={{ flex: 1 }}
                onClick={() => finish(quantity, description, "/cart")}
                className="button"
              >
                {t("commissions:cart")}
              </Button>
            </ButtonsContainer>
          </CardSection>
        );
      default:
        break;
    }
  };

  return (
    <div>
      <Content>
        <div className="slide">
          {transitions.map(({ item, key, props }) => (
            <animated.div key={key} style={props} className="body">
              <div
                onClick={() => history.push("/commissions")}
                className="back"
              >
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "45px",
                    style: {
                      padding: 10,
                    },
                    className: "icon",
                  }}
                >
                  <FiArrowLeft />
                </IconContext.Provider>
              </div>
              {getStep(item)}
            </animated.div>
          ))}
          <ImageCard
            direction={!direction || direction === "column"}
            images={images}
          />
        </div>
      </Content>
    </div>
  );
}
