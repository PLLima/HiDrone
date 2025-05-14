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

// Define types for errors and submitted data
type Errors = {
  email?: string;
  password?: string;
};

export const LogInModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Custom validation checks
    const newErrors: Errors = {};

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Store the submitted data
    localStorage.setItem("logged_email_debug", data.email);
    localStorage.setItem("logged_name_debug", "User");

    // Close the modal and reload the page
    onClose();
    window.location.reload();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()} backdrop="blur" size="xs">
      <ModalContent>
        <>
          <ModalHeader className="text-4xl font-bold text-center">Log In</ModalHeader>
          <ModalBody>
            <Form
              className="w-full justify-center items-center space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-4 max-w-md">
                <Input name="email" label="Email" isRequired />
                <Input name="password" type="password" label="Password" isRequired />
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
