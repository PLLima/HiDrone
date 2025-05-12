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

export default function SignUpPage() {
  const [password, setPassword] = React.useState<string>("");
  const [repeat_password, setRepeatPassword] = React.useState<string>("");
  const [submitted, setSubmitted] = React.useState<SubmittedData | null>(null);
  const [errors, setErrors] = React.useState<Errors>({});
  const [touched, setTouched] = React.useState<{ password: boolean; repeat_password: boolean }>({
    password: false,
    repeat_password: false,
  });

  // Real-time password validation
  const getPasswordError = (value: string): string | null => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    return null;
  };

  // Real-time password repeat validation
  const getRepeatPasswordError = (value1: string, value2: string): string | null => {
    if (value1 !== value2) {
      return "Passwords do not match";
    }
    return null;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Custom validation checks
    const newErrors: Errors = {};

    // Password validation
    const passwordError = getPasswordError(data.password);
    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Store the username and email in localStorage
    localStorage.setItem("logged_name_debug", data.name);
    localStorage.setItem("logged_email_debug", data.email);

    // Clear errors and submit
    setErrors({});
    setSubmitted(data as SubmittedData);

    // Redirect to "/Hire"
    window.location.href = "/hire";
  };

  return (
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
              return "Please enter your name";
            }
            return errors.name;
          }}
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
        />

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
        />

        <Input
          isRequired
          errorMessage={touched.password ? getPasswordError(password) : null} // Show error only if touched
          isInvalid={touched.password && getPasswordError(password) !== null}
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your password"
          type="password"
          autoComplete="new-password"
          value={password}
          onValueChange={(value) => {
            setPassword(value);
            setTouched((prev) => ({ ...prev, password: true })); // Mark as touched
          }}
        />

        <Input
          isRequired
          errorMessage={
            touched.repeat_password ? getRepeatPasswordError(password, repeat_password) : null
          } // Show error only if touched
          isInvalid={
            touched.repeat_password && getRepeatPasswordError(password, repeat_password) !== null
          }
          label="Repeat password"
          labelPlacement="outside"
          placeholder="Repeat your password"
          type="password"
          autoComplete="new-password"
          value={repeat_password}
          onValueChange={(value) => {
            setRepeatPassword(value);
            setTouched((prev) => ({ ...prev, repeat_password: true })); // Mark as touched
          }}
        />

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
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