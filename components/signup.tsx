"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";

import { title } from "@/components/primitives";
import React, { FormEvent } from "react";
import { Form, Input, Select, SelectItem, Checkbox, Button } from "@heroui/react";
import { ClientData, registerClient } from "@/app/server/user";
import { hash } from "bcryptjs";

// Define types for errors and submitted data
type Errors = {
  password?: string;
  name?: string;
  email?: string;
};

export const SignUpModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [password, setPassword] = React.useState<string>("");
  const [repeat_password, setRepeatPassword] = React.useState<string>("");
  const [submitted, setSubmitted] = React.useState<ClientData | null>(null);
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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Format the data to update the database
    const hashedPassword = await hash(data.password, 10);
    const formattedData = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      credits: 0,
    };

    // Try to register the client
    const registered = await registerClient(formattedData);
    if (registered === false) {
      // Set an error message for the email field
      newErrors.email = "An account with this email already exists.";
      setErrors(newErrors);
      return; // Prevent modal from closing
    }

    // Store the username and email in localStorage
    localStorage.setItem("logged_name_debug", data.name);
    localStorage.setItem("logged_email_debug", data.email);

    // Clear errors and submit
    setErrors({});
    setSubmitted(formattedData as ClientData);

    window.location.reload();
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()} backdrop="blur" size="xs">
      <ModalContent>
        <>
          <ModalHeader className="text-4xl font-bold text-center">Sign Up</ModalHeader>
          <ModalBody>
            <Form
              className="w-full justify-center items-center space-y-4"
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
                  name="name"
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
                    return errors.email; // Show email error if it exists
                  }}
                  label="Email"
                  name="email"
                  type="email"
                />

                <Input
                  isRequired
                  errorMessage={touched.password ? getPasswordError(password) : null} // Show error only if touched
                  isInvalid={touched.password && getPasswordError(password) !== null}
                  label="Password"
                  name="password"
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
                  type="password"
                  autoComplete="new-password"
                  value={repeat_password}
                  onValueChange={(value) => {
                    setRepeatPassword(value);
                    setTouched((prev) => ({ ...prev, repeat_password: true })); // Mark as touched
                  }}
                />
                <div className="flex w-full gap-1">
                  <Button
                    type="button"
                    className="w-1/3"
                    onPress={onClose}
                    color="danger"
                    variant="light"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    color="primary"
                    isDisabled={
                      !!getPasswordError(password) ||
                      !!getRepeatPasswordError(password, repeat_password)
                    }
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter className="h-4" />
        </>
      </ModalContent>
    </Modal>
  );
};
