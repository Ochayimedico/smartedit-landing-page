import React, { useState } from "react";
import Card from "../UI/Card";
import PaymentForm from "./PaymentForm";

const Checkout = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <Card className="pt-[0]">
      <PaymentForm formValues={formValues} setFormValues={setFormValues} />
    </Card>
  );
};

export default Checkout;
