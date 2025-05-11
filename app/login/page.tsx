"use client";

import { title } from "@/components/primitives";
import React, { FormEvent } from "react";
import { Form, Input, Select, SelectItem, Checkbox, Button } from "@heroui/react";

// Define types for errors and submitted data
type Errors = {
  password?: string;
  name?: string;
};

type SubmittedData = {
  name: string;
  email: string;
  password: string;
};

export default function SignInPage() {
  const [password, setPassword] = React.useState<string>("");
  const [submitted, setSubmitted] = React.useState<SubmittedData | null>(null);
  const [errors, setErrors] = React.useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Custom validation checks
    const newErrors: Errors = {};

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
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
              return "Please enter your email";
            }
            if (validationDetails.typeMismatch) {
              return "Please enter a valid email address";
            }
          }}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          autoComplete="email"
        />

        <Input
          isRequired
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          autoComplete="password"
          value={password}
          onValueChange={setPassword}
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

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}