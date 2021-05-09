import React, { useRef, useState } from "react";
import { ButtonReverse } from "../../styles/commissions";
import { FormContract } from "./styles";
import { AiOutlineWarning } from "react-icons/ai";
import axios from "axios";

export function FormCnt() {
  const checkBoxes = ["Eu", "Parente", "Outro"];
  const [type, setType] = useState({
    forWho: "Eu",
  });
  const checkRef = useRef([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setType({
      ...type,
      [name]: value,
    });
  };

  const changeItem = (index: number) => {
    console.log(`checkRef.current`, checkRef.current);
    checkRef.current[index].click();
  };

  const enviar = (e) => {
    e.preventDefault();

    axios.post("/api/user", type);
  };

  return (
    <FormContract onSubmit={enviar}>
      <h1>Formulário</h1>
      <label>Nome completo</label>
      <input type="text" name="name" onChange={handleChange} />
      <br />
      <br />
      <label>Data de nascimento</label>
      <input
        placeholder="dd/mm/yyyy"
        type="text"
        name="birth"
        onChange={handleChange}
      />
      <br />
      <br />
      <label>Quem realizara o pagamento</label>
      <br />
      <br />
      <div className="items">
        {checkBoxes.map((chack, index) => (
          <div onClick={() => changeItem(index)} className="item">
            <input
              ref={(el) => (checkRef.current[index] = el)}
              type="radio"
              name="forWho"
              value={chack}
              onChange={handleChange}
            />
            <span>{chack}</span>
          </div>
        ))}
      </div>
      <br />
      {(type.forWho === "Outro" || type.forWho === "Parente") && (
        <>
          <br />
          <label>Nome completo {type.forWho}</label>
          <input type="text" name="otherName" onChange={handleChange} />
          <br />
          <br />
          <label>Data de nascimento {type.forWho}</label>
          <input
            placeholder="dd/mm/yyyy"
            type="text"
            name="otherBirth"
            onChange={handleChange}
          />
          <br />
          <br />
        </>
      )}
      <div className="warning">
        <AiOutlineWarning className="icon" />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          aperiam?
        </span>
      </div>
      <br />
      <ButtonReverse type="submit">Enviar</ButtonReverse>
    </FormContract>
  );
}
