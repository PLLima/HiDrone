"use client";

import React, { FormEvent } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Accordion,
  AccordionItem,
} from "@heroui/react";
import { Form, Input, Button, Checkbox } from "@heroui/react";
import { ClientData, registerClient } from "@/app/server/user";
import { hash } from "bcryptjs";

// Define types for errors and submitted data
type Errors = {
  password?: string;
  name?: string;
  email?: string;
  enterpriseName?: string;
  cnpj?: string;
};

export const SignUpModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [password, setPassword] = React.useState("");
  const [repeat_password, setRepeatPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState<ClientData | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Errors>({});
  const [touched, setTouched] = React.useState({ password: false, repeat_password: false });
  const [cnpj, setCnpj] = React.useState("");
  const [registerEnterprise, setRegisterEnterprise] = React.useState(false);

  const formatCnpj = (value: string): string => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const getPasswordError = (value: string): string | null => {
    if (value.length < 4) return "Password must be 4 characters or more";
    if ((value.match(/[A-Z]/g) || []).length < 1) return "Password needs at least 1 uppercase letter";
    if ((value.match(/[^a-z]/gi) || []).length < 1) return "Password needs at least 1 symbol";
    return null;
  };

  const getRepeatPasswordError = (value1: string, value2: string): string | null => {
    return value1 !== value2 ? "Passwords do not match" : null;
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    const unformattedCnpj = cnpj.replace(/\D/g, "");
    const newErrors: Errors = {};

    const passwordError = getPasswordError(data.password);
    if (passwordError) newErrors.password = passwordError;

    if (registerEnterprise) {
      if (!data.enterpriseName) newErrors.enterpriseName = "Please enter your enterprise name";
      if (!unformattedCnpj) newErrors.cnpj = "Please enter your CNPJ";
      else if (!/^\d{14}$/.test(unformattedCnpj)) newErrors.cnpj = "CNPJ must be 14 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setIsLoading(false);
      setErrors(newErrors);
      return;
    }

    const hashedPassword = await hash(data.password, 10);
    const formattedData = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      credits: 0,
    };

    const registered = await registerClient(formattedData);
    if (registered === false) {
      newErrors.email = "An account with this email already exists.";
      setIsLoading(false);
      setErrors(newErrors);
      return;
    }

    localStorage.setItem("logged_name_debug", data.name);
    localStorage.setItem("logged_email_debug", data.email);
    if (registerEnterprise) {
      localStorage.setItem("enterprise_name_debug", data.enterpriseName);
      localStorage.setItem("cnpj_debug", unformattedCnpj);
    }

    setErrors({});
    setSubmitted(formattedData);
    setIsLoading(false);
    window.location.reload();
  }

  const clearVariables = () => {
    setPassword("");
    setRepeatPassword("");
    setSubmitted(null);
    setErrors({});
    setTouched({ password: false, repeat_password: false });
    setRegisterEnterprise(false);
    setCnpj("");
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()} onClose={clearVariables} backdrop="blur" size="xs">
      <ModalContent>
        <>
          <ModalHeader className="text-4xl font-bold text-center">Sign Up</ModalHeader>
          <ModalBody>
            <Form className="w-full space-y-4" onSubmit={onSubmit} validationErrors={errors} autoComplete="on">
              <div className="flex flex-col gap-4 max-w-md">
                <Input isRequired label="Name" name="name" />
                <Input isRequired label="Email" name="email" type="email" />

                <Input
                  isRequired
                  errorMessage={touched.password ? getPasswordError(password) : null}
                  isInvalid={touched.password && getPasswordError(password) !== null}
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onValueChange={(value) => {
                    setPassword(value);
                    setTouched((prev) => ({ ...prev, password: true }));
                  }}
                />

                <Input
                  isRequired
                  errorMessage={touched.repeat_password ? getRepeatPasswordError(password, repeat_password) : null}
                  isInvalid={touched.repeat_password && getRepeatPasswordError(password, repeat_password) !== null}
                  label="Repeat password"
                  type="password"
                  autoComplete="new-password"
                  value={repeat_password}
                  onValueChange={(value) => {
                    setRepeatPassword(value);
                    setTouched((prev) => ({ ...prev, repeat_password: true }));
                  }}
                />

                <Accordion>
                  <AccordionItem className="text-4xl font-bold text-center" key="1" title="Register your enterprise">
                    <div className="flex flex-col gap-4 max-w-md">
                      <Checkbox
                        isSelected={registerEnterprise}
                        onValueChange={setRegisterEnterprise}
                      >
                        Register as supplier 
                      </Checkbox>
                      <Input
                        isRequired={registerEnterprise}
                        isDisabled={!registerEnterprise}
                        errorMessage={() => errors.enterpriseName}
                        label="Enterprise Name"
                        name="enterpriseName"
                        type="text"
                        autoComplete="organization"
                      />
                      <Input
                        isRequired={registerEnterprise}
                        isDisabled={!registerEnterprise}
                        value={cnpj}
                        onValueChange={(value) => setCnpj(formatCnpj(value))}
                        errorMessage={() => errors.cnpj}
                        label="CNPJ"
                        name="cnpj"
                        type="text"
                        autoComplete="off"
                      />
                    </div>
                  </AccordionItem>
                </Accordion>

                <div className="flex w-full gap-1">
                  <Button type="button" className="w-1/3" onPress={() => { clearVariables(); onClose(); }} color="danger" variant="light">Cancel</Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    color="primary"
                    isLoading={isLoading}
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
