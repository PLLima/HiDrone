"use client";

import React, { FormEvent } from "react";
import { Form, Input, Button } from "@heroui/react";

// Define types for errors and submitted data
type Errors = {
  enterpriseName?: string;
  cnpj?: string;
};

type SubmittedData = {
  enterpriseName: string;
  cnpj: string;
};

export default function SupplyPage() {
  const [submitted, setSubmitted] = React.useState<SubmittedData | null>(null);
  const [errors, setErrors] = React.useState<Errors>({});
  const [cnpj, setCnpj] = React.useState<string>("");

  const formatCnpj = (value: string): string => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Format as CNPJ (99.999.999/9999-99)
    return numericValue
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Remove formatting from CNPJ for validation
    const unformattedCnpj = cnpj.replace(/\D/g, "");

    // Custom validation checks
    const newErrors: Errors = {};

    if (!data.enterpriseName) {
      newErrors.enterpriseName = "Please enter your enterprise name";
    }

    if (!unformattedCnpj) {
      newErrors.cnpj = "Please enter your CNPJ";
    } else if (!/^\d{14}$/.test(unformattedCnpj)) {
      newErrors.cnpj = "CNPJ must be 14 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted({ ...data, cnpj: unformattedCnpj } as SubmittedData);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <h1 className="text-4xl font-bold text-center">Supplier Registration</h1>
      <Form
        className="w-full justify-center items-center space-y-4"
        validationErrors={errors}
        onReset={() => setSubmitted(null)}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4 max-w-md">
          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your enterprise name";
              }
              return errors.enterpriseName;
            }}
            label="Enterprise Name"
            labelPlacement="outside"
            name="enterpriseName"
            placeholder="Enter your enterprise name"
            type="text"
            autoComplete="organization"
          />

          <Input
            isRequired
            value={cnpj}
            onValueChange={(value) => setCnpj(formatCnpj(value))}
            errorMessage={() => errors.cnpj}
            label="CNPJ"
            labelPlacement="outside"
            name="cnpj"
            placeholder="Enter your CNPJ"
            type="text"
            autoComplete="off"
          />

          <div className="flex gap-4">
            <Button className="w-full" color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="bordered">
              Reset
            </Button>
          </div>
        </div>

      </Form>
    </div>
  );
}