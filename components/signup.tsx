"use client";

import React, { FormEvent } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { Form, Input, Button, Checkbox } from "@heroui/react";
import {
  ClientData,
  registerClient,
  registerSupplier,
} from "@/app/server/user";
import { hash } from "bcryptjs";
import { Tabs, Tab } from "@heroui/react";
import { get } from "http";
import { format } from "path";

// Define types for errors and submitted data
type Errors = {
  password?: string;
  name?: string;
  email?: string;
  enterpriseName?: string;
  cnpj?: string;
};

const ClientForm = ({
  isLoading,
  onClose,
  clearVariables,
  onSubmit,
}: {
  isLoading: boolean;
  onClose: () => void;
  clearVariables: () => void;
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
}) => {
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [touched, setTouched] = React.useState({
    password: false,
    repeat_password: false,
  });
  const [errors, setErrors] = React.useState<{ password?: string }>({});

  const getPasswordError = (value: string): string | null => {
    if (value.length < 4) return "Password must be 4 characters or more";
    if ((value.match(/[A-Z]/g) || []).length < 1)
      return "Password needs at least 1 uppercase letter";
    if ((value.match(/[^a-z]/gi) || []).length < 1)
      return "Password needs at least 1 symbol";
    return null;
  };

  const getRepeatPasswordError = (
    value1: string,
    value2: string
  ): string | null => {
    return value1 !== value2 ? "Passwords do not match" : null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const newErrors: { password?: string } = {};
    const passwordError = getPasswordError(password);
    if (passwordError) newErrors.password = passwordError;
    if (getRepeatPasswordError(password, repeatPassword))
      newErrors.password =
        getRepeatPasswordError(password, repeatPassword) || "";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      await onSubmit({ name, email, password });
    }
  };

  return (
    <Form
      className="w-full space-y-4"
      onSubmit={handleSubmit}
      validationErrors={errors}
      autoComplete="on"
    >
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
          errorMessage={
            touched.repeat_password
              ? getRepeatPasswordError(password, repeatPassword)
              : null
          }
          isInvalid={
            touched.repeat_password &&
            getRepeatPasswordError(password, repeatPassword) !== null
          }
          label="Repeat password"
          type="password"
          autoComplete="new-password"
          value={repeatPassword}
          onValueChange={(value) => {
            setRepeatPassword(value);
            setTouched((prev) => ({ ...prev, repeat_password: true }));
          }}
        />

        <div className="flex w-full gap-1">
          <Button
            type="button"
            className="w-1/3"
            onPress={() => {
              clearVariables();
              onClose();
            }}
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
            isDisabled={
              !!getPasswordError(password) ||
              !!getRepeatPasswordError(password, repeatPassword)
            }
          >
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

const SupplierForm = ({
  isLoading,
  onClose,
  clearVariables,
  onSubmit,
}: {
  isLoading: boolean;
  onClose: () => void;
  clearVariables: () => void;
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
    enterpriseName: string;
    cnpj: string;
  }) => Promise<void>;
}) => {
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [touched, setTouched] = React.useState({
    enterpriseName: false,
    password: false,
    repeat_password: false,
    cnpj: false,
  });
  const [errors, setErrors] = React.useState<{
    password?: string;
    enterpriseName?: string;
    cnpj?: string;
  }>({});
  const [registerEnterprise, setRegisterEnterprise] = React.useState(false);
  const [cnpj, setCnpj] = React.useState("");
  const [enterpriseName, setEnterpriseName] = React.useState("");

  const getEnterpriseNameError = (value: string): string | null => {
    if (!value) return "Please enter your enterprise name";
    return null;
  };

  const getPasswordError = (value: string): string | null => {
    if (value.length < 4) return "Password must be 4 characters or more";
    if ((value.match(/[A-Z]/g) || []).length < 1)
      return "Password needs at least 1 uppercase letter";
    if ((value.match(/[^a-z]/gi) || []).length < 1)
      return "Password needs at least 1 symbol";
    return null;
  };

  const getRepeatPasswordError = (
    value1: string,
    value2: string
  ): string | null => {
    return value1 !== value2 ? "Passwords do not match" : null;
  };

  const getCnpjError = (value: string): string | null => {
    if (!value.replace(/\D/g, "")) return "Please enter your CNPJ";
    return null;
  };

  const formatCnpj = (value: string): string => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 18);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const newErrors: {
      password?: string;
      enterpriseName?: string;
      cnpj?: string;
    } = {};
    const passwordError = getPasswordError(password);
    if (passwordError) newErrors.password = passwordError;
    if (getRepeatPasswordError(password, repeatPassword))
      newErrors.password =
        getRepeatPasswordError(password, repeatPassword) || "";
    if (getEnterpriseNameError(enterpriseName))
      newErrors.enterpriseName = getEnterpriseNameError(enterpriseName) || "";
    if (getCnpjError(cnpj)) newErrors.cnpj = getCnpjError(cnpj) || "";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      await onSubmit({ name, email, password, enterpriseName, cnpj });
    }
  };

  return (
    <Form
      className="w-full space-y-4"
      onSubmit={handleSubmit}
      validationErrors={errors}
      autoComplete="on"
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          isRequired
          errorMessage={
            touched.enterpriseName
              ? getEnterpriseNameError(enterpriseName)
              : null
          }
          label="Enterprise Name"
          name="enterpriseName"
          type="text"
          autoComplete="organization"
          value={enterpriseName}
          onValueChange={(value) => {
            setEnterpriseName(value);
            setTouched((prev) => ({ ...prev, enterpriseName: true }));
          }}
        />

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
          errorMessage={
            touched.repeat_password
              ? getRepeatPasswordError(password, repeatPassword)
              : null
          }
          isInvalid={
            touched.repeat_password &&
            getRepeatPasswordError(password, repeatPassword) !== null
          }
          label="Repeat password"
          type="password"
          autoComplete="new-password"
          value={repeatPassword}
          onValueChange={(value) => {
            setRepeatPassword(value);
            setTouched((prev) => ({ ...prev, repeat_password: true }));
          }}
        />

        <Input
          isRequired
          value={cnpj}
          errorMessage={touched.cnpj ? getCnpjError(cnpj) : null}
          label="CNPJ"
          name="cnpj"
          type="text"
          autoComplete="off"
          onValueChange={(value) => {
            setCnpj(formatCnpj(value));
            setTouched((prev) => ({ ...prev, cnpj: true }));
          }}
        />

        <div className="flex w-full gap-1">
          <Button
            type="button"
            className="w-1/3"
            onPress={() => {
              clearVariables();
              onClose();
            }}
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
            isDisabled={
              !!getPasswordError(password) ||
              !!getRepeatPasswordError(password, repeatPassword)
            }
          >
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

// --- Main Modal Component ---

export const SignUpModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState<any>(null);
  const [errors, setErrors] = React.useState<Errors>({});

  // Clear variables for modal close/reset
  const clearVariables = () => {
    setSubmitted(null);
    setErrors({});
  };

  // Handler for client form submission
  const handleClientSubmit = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    setErrors({});
    const passwordError =
      data.password.length < 4 ? "Password must be 4 characters or more" : null;
    if (passwordError) {
      setErrors({ password: passwordError });
      setIsLoading(false);
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
      setErrors({ email: "An account with this email already exists." });
      setIsLoading(false);
      return;
    }
    localStorage.setItem("logged_name_debug", data.name);
    localStorage.setItem("logged_email_debug", data.email);
    setErrors({});
    setSubmitted(formattedData);
    setIsLoading(false);
    window.location.reload();
  };

  // Handler for supplier form submission
  const handleSupplierSubmit = async (data: {
    name: string;
    email: string;
    password: string;
    enterpriseName: string;
    cnpj: string;
  }) => {
    setIsLoading(true);
    setErrors({});
    const passwordError =
      data.password.length < 4 ? "Password must be 4 characters or more" : null;
    const cnpjError = !/^\d{14}$/.test(data.cnpj.replace(/\D/g, ""))
      ? "CNPJ must be 14 digits"
      : null;
    const newErrors: Errors = {};
    if (passwordError) newErrors.password = passwordError;
    if (!data.enterpriseName)
      newErrors.enterpriseName = "Please enter your enterprise name";
    if (!data.cnpj) newErrors.cnpj = "Please enter your CNPJ";
    else if (cnpjError) newErrors.cnpj = cnpjError;
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }
    const hashedPassword = await hash(data.password, 10);
    const formattedData = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      enterpriseName: data.enterpriseName,
      cnpj: data.cnpj,
      credits: 0,
    };
    const registered = await registerSupplier(formattedData);
    if (registered === false) {
      setErrors({ email: "An account with this email already exists." });
      setIsLoading(false);
      return;
    }
    localStorage.setItem("logged_name_debug", data.name);
    localStorage.setItem("logged_email_debug", data.email);
    localStorage.setItem("enterprise_name_debug", data.enterpriseName);
    localStorage.setItem("cnpj_debug", data.cnpj.replace(/\D/g, ""));
    setErrors({});
    setSubmitted(formattedData);
    setIsLoading(false);
    window.location.reload();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(isOpen) => !isOpen && onClose()}
      onClose={clearVariables}
      backdrop="blur"
      size="xs"
    >
      <ModalContent className="px-4">
        <>
          <ModalHeader className="text-4xl font-bold text-center">
            Sign Up
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center w-full">
              <Tabs
                aria-label="Sign up type"
                className="w-full flex flex-col items-center"
                color="primary"
                classNames={{
                  tabList: "justify-center",
                  tab: "mx-2",
                }}
              >
                <Tab key="client" title="Client">
                  <ClientForm
                    onSubmit={handleClientSubmit}
                    isLoading={isLoading}
                    onClose={onClose}
                    clearVariables={clearVariables}
                  />
                </Tab>
                <Tab key="supplier" title="Supplier">
                  <SupplierForm
                    onSubmit={handleSupplierSubmit}
                    isLoading={isLoading}
                    onClose={onClose}
                    clearVariables={clearVariables}
                  />
                </Tab>
              </Tabs>
            </div>
          </ModalBody>
          <ModalFooter className="h-4" />
        </>
      </ModalContent>
    </Modal>
  );
};
