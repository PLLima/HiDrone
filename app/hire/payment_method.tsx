"use client";

import React, { useEffect, useState } from "react";
import { RadioGroup, Radio, Button, cn } from "@heroui/react";

export const CustomRadio = (props: any) => {
  const { children, description, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      <div>
        {children}
        {description && (
          <div className="text-small text-foreground opacity-70">{description}</div>
        )}
      </div>
    </Radio>
  );
};

type PaymentMethodProps = {
  selectedDroneId: number | null;
  distanceCost: number;
  goToPayment: () => void;
};

export default function PaymentMethod({
  selectedDroneId,
  distanceCost,
  goToPayment,
}: PaymentMethodProps) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("paymentMethod");
    if (saved) setSelected(saved);
  }, []);

  const handleChange = (value: string) => {
    setSelected(value);
    localStorage.setItem("paymentMethod", value);
  };

  const canContinue =
    selectedDroneId !== null && distanceCost > 0 && selected !== null;

  const handleClick = () => {
    if (selectedDroneId === null) {
      alert("Please select a drone before continuing.");
      return;
    }
    if (distanceCost <= 0) {
      alert("Please set a delivery route before continuing.");
      return;
    }
    if (!selected) {
      alert("Please select a payment method.");
      return;
    }

    goToPayment();
  };

  return (
    <div className="p-4 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold">Select a Payment Method</h2>

      <RadioGroup
        value={selected || ""}
        onValueChange={handleChange}
        className="flex flex-col gap-4"
      >
        <CustomRadio value="pix" description="Instant payment using a QR Code.">
          Pix
        </CustomRadio>
        <CustomRadio
          value="creditCard"
          description="Traditional credit card payment."
        >
          Credit Card
        </CustomRadio>
        <CustomRadio value="siteCredit" description="Use credits available on the site.">
          Site Credit
        </CustomRadio>
      </RadioGroup>

	  <Button color="primary" className="w-full mt-1" onClick={handleClick}>
        Continue to Payment
      </Button>
    </div>
  );
}
