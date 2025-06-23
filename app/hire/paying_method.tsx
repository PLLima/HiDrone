"use client";

import React, { useEffect, useState } from "react";
import { RadioGroup, useRadio, Button } from "@heroui/react";
import { VisuallyHidden } from "@react-aria/visually-hidden";

export const CustomRadio = (props: any) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={`group inline-flex items-center justify-between flex-row-reverse tap-highlight-transparent
                  max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4
                  hover:opacity-70 active:opacity-50
                  data-[selected=true]:border-primary`}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">{description}</span>
        )}
      </div>
    </Component>
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
        <CustomRadio value="creditCard" description="Traditional credit card payment.">
          Credit Card
        </CustomRadio>
        <CustomRadio value="siteCredit" description="Use credits available on the site.">
          Site Credit
        </CustomRadio>
      </RadioGroup>

	  <Button color="primary" className="w-full mt-4" onClick={handleClick}>
        Continue to Payment
      </Button>
    </div>
  );
}
