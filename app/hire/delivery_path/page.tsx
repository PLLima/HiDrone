"use client";

import React, { FormEvent } from "react";
import { Form, Input, Button } from "@heroui/react";

// Define types for errors and submitted data
type Errors = {
  pickup?: string;
  delivery?: string;
};

type SubmittedData = {
  pickup: string;
  delivery: string;
};

export default function HireLayout() {
  const [submitted, setSubmitted] = React.useState<SubmittedData | null>(null);
  const [errors, setErrors] = React.useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Custom validation checks
    const newErrors: Errors = {};

    if (!data.pickup) {
      newErrors.pickup = "Please enter a pickup location";
    }

    if (!data.delivery) {
      newErrors.delivery = "Please enter a delivery location";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(data as SubmittedData);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <h1 className="text-4xl font-bold text-center">Hire Delivery</h1>
      <Form
        className="w-full justify-center items-center space-y-4"
        validationErrors={errors}
        onReset={() => setSubmitted(null)}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4 max-w-md">
          <Input
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter a pickup location";
              }
              return errors.pickup;
            }}
            name="pickup"
            label="Pickup location"
            type="text"
            autoComplete="street-address"
          />

          <Input
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter a delivery location";
              }
              return errors.delivery;
            }}
            name="delivery"
            label="Delivery location"
            type="text"
            autoComplete="street-address"
          />

          <div className="flex gap-4">
            <Button className="w-full" color="primary" type="submit">
              See drones avaliable
            </Button>
          </div>
        </div>

      </Form>
    </div>
  );
}