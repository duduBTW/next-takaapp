import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContractItem } from "../../src/contract/ContractItem";
import { FormCnt } from "../../src/contract/FormCnt";

export default function ContractPage() {
  const [accepted, setAccepted] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("/api/contract").then((res) => {
      setData(res.data);
    });
  }, []);
  return !accepted ? (
    <ContractItem data={data} setAccepted={setAccepted} />
  ) : (
    <FormCnt />
  );
}
