import React from "react";
import { ButtonReverse } from "../../styles/commissions";
import { ContractContainer } from "./styles";

export function ContractItem({ setAccepted, data }) {
  return (
    <ContractContainer>
      <h1>Termos</h1>
      {data?.term ? (
        <div dangerouslySetInnerHTML={{ __html: data.term }} />
      ) : (
        <div>Loading...</div>
      )}

      <ButtonReverse onClick={() => setAccepted(true)}>Aceitar</ButtonReverse>
    </ContractContainer>
  );
}
