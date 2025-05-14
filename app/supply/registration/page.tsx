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

export default function RegistrationSupplyPage() {
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

    // Save data to localStorage
    localStorage.setItem("enterprise_name_debug", data.enterpriseName);
    localStorage.setItem("cnpj_debug", unformattedCnpj);

    // Clear errors and submit
    setErrors({});
    setSubmitted({ ...data, cnpj: unformattedCnpj } as SubmittedData);

    // Redirect to supply page
    window.location.href = "/supply";
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <h1 className="text-4xl font-bold text-center">Supplier Registration</h1>
      <Form
        className="w-full justify-center items-center space-y-4"
        validationErrors={errors}
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
            name="enterpriseName"
            type="text"
            autoComplete="organization"
          />

          <Input
            isRequired
            value={cnpj}
            onValueChange={(value) => setCnpj(formatCnpj(value))}
            errorMessage={() => errors.cnpj}
            label="CNPJ"
            name="cnpj"
            type="text"
            autoComplete="off"
          />

          <div className="flex gap-4">
            <Button className="w-full" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>

      </Form>
    </div>
  );
}