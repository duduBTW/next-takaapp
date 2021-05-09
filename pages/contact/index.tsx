import React, { useState } from "react";
import { useRouter } from "next/router";
import { cardPropsContact, useOrder } from "../_app";
import { Button } from "../../styles/commissions";
import { ContactContainer, Form, Input, Label } from "../../styles/contact";
import useTranslation from "next-translate/useTranslation";
export default function Contact() {
  const { setContactInfo, contactInfo } = useOrder();

  const [discord, setDiscord] = useState("");
  const [twitter, setTwitter] = useState("");
  const [email, setEmail] = useState("");

  const changeDiscord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscord(e.target.value);
  };
  const changeTwitter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwitter(e.target.value);
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const { t } = useTranslation();

  const history = useRouter();

  return (
    <ContactContainer>
      <div>
        <h1>{t("contact:title")}</h1>
        <span>({t("contact:warning")})</span>
      </div>
      <Form>
        <Label>Discord</Label>
        <Input
          defaultValue={contactInfo.discord}
          onChange={changeDiscord}
          value={discord}
          placeholder="teste#1222"
          type="text"
          name="discord"
        />

        <Label>Twitter</Label>
        <Input
          defaultValue={contactInfo.twitter}
          onChange={changeTwitter}
          value={twitter}
          placeholder="teste"
          type="text"
          name="twitter"
        />

        <Label>Email</Label>
        <Input
          defaultValue={contactInfo.email}
          onChange={changeEmail}
          value={email}
          placeholder="example@email.com"
          type="email"
          name="email"
        />
      </Form>

      <Button
        style={{ width: 700 }}
        onClick={() => {
          if (!email && !discord && !twitter) {
            alert(t("contact:warning"));
          } else {
            setContactInfo({
              email,
              discord,
              twitter,
            });

            history.push("/finish");
          }
        }}
      >
        {t("contact:button")}
      </Button>
    </ContactContainer>
  );
}
