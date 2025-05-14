"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";

import React, { FormEvent } from "react";
import { Form, Input, Button } from "@heroui/react";
import { findUser } from "@/app/server/user";
import { compare, hash } from "bcryptjs";

// Define types for errors and submitted data
type Errors = {
  email?: string;
  password?: string;
};

export const LogInModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Errors>({});

  async function handleSubmit (e: FormEvent<HTMLFormElement>){
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Custom validation checks
    const newErrors: Errors = {};

    // Search for registered user
    const existingUser = await findUser(data.email);
    if (!existingUser) {
      newErrors.email = "User not found";
      setIsLoading(false);
      setErrors(newErrors);
      return;
    }

    // Password validation
    const match = await compare(data.password, existingUser.password); 
    if (!match) {
      newErrors.password = "Incorrect password";
      setIsLoading(false);
      setErrors(newErrors);
      return;
    }

    // Store the submitted data
    localStorage.setItem("logged_email_debug", existingUser.email);
    localStorage.setItem("logged_name_debug", existingUser.name);

    // Close the modal and reload the page
    setIsLoading(false);
    onClose();
    window.location.reload();
  };

  const clearVariables = () => {
    setErrors({});
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()} onClose={() => clearVariables()} backdrop="blur" size="xs">
      <ModalContent>
        <>
          <ModalHeader className="text-4xl font-bold text-center">Log In</ModalHeader>
          <ModalBody>
            <Form
              className="w-full justify-center items-center space-y-4"
              onSubmit={handleSubmit}
              validationErrors={errors}
            >
              <div className="flex flex-col gap-4 max-w-md">
                <Input type="email" name="email" label="Email" isRequired />
                <Input name="password" type="password" label="Password" isRequired />
                <div className="flex w-full gap-1">
                  <Button
                    type="button"
                    className="w-1/3"
                    onPress={() => {clearVariables(); onClose();}}
                    color="danger"
                    variant="light"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    color="primary"
                    isLoading={isLoading}
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
