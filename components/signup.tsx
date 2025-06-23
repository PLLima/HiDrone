"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { Form, Input, Button } from "@heroui/react";
import { registerClient, registerSupplier } from "@/app/server/user";
import { hash } from "bcryptjs";
import { Tabs, Tab } from "@heroui/react";
import { get } from "http";

const ClientForm = ({ onClose }: { onClose: () => void }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [firstFocused, setFirstFocused] = React.useState({
    name: false,
    email: false,
    password: false,
    repeat_password: false,
  });
  const [touched, setTouched] = React.useState({
    name: false,
    email: false,
    password: false,
    repeat_password: false,
  });
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    password?: string;
    repeat_password?: string;
  }>({});

  const getNameError = (value: string): string | null => {
    if (!value) return "Please enter your name.";
    return null;
  };

  const getEmailError = (value: string): string | null => {
    if (!value) return "Please enter your email.";
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(value))
      return "Invalid email address. Must be a valid email address, with characters before and after the '@' and a '.' with something at the end.";
    return null;
  };

  const getPasswordError = (value: string): string | null => {
    if (value.length < 4) return "Password must be 4 characters or more.";
    if ((value.match(/[A-Z]/g) || []).length < 1)
      return "Password needs at least 1 uppercase letter.";
    if ((value.match(/[^a-z]/gi) || []).length < 1)
      return "Password needs at least 1 symbol.";
    return null;
  };

  const getRepeatPasswordError = (
    value1: string,
    value2: string
  ): string | null => {
    return value1 !== value2 ? "Passwords do not match." : null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      repeat_password?: string;
    } = {};

    const nameError = getNameError(name);
    if (nameError) newErrors.name = nameError || "";
    const emailError = getEmailError(email);
    if (emailError) newErrors.email = emailError || "";
    const passwordError = getPasswordError(password);
    if (passwordError) newErrors.password = passwordError || "";
    const repeatedPasswordError = getPasswordError(password);
    if (repeatedPasswordError)
      newErrors.repeat_password = repeatedPasswordError || "";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      await handleClientSubmit({ name, email, password });
    }
  };

  // Handler for client form submission
  const handleClientSubmit = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    const hashedPassword = await hash(data.password, 10);
    const formattedData = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      credits: 0,
    };
    const registered = await registerClient(formattedData);
    if (registered === "email") {
      errors.email = "An account with this email already exists.";
      setErrors(errors);
      setIsLoading(false);
      return;
    }
    localStorage.setItem("logged_name_debug", data.name);
    localStorage.setItem("logged_email_debug", data.email);
    setErrors({});
    setIsLoading(false);
    window.location.reload();
  };

  // Clear variables for modal close/reset
  const clearVariables = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setTouched({
      name: false,
      email: false,
      password: false,
      repeat_password: false,
    });
    setErrors({});
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
          errorMessage={errors.name}
          isInvalid={touched.name && !!errors.name}
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onValueChange={(value) => {
            setName(value);
            setErrors((prev) => ({
              ...prev,
              name: getNameError(value) || "",
            }));
          }}
          onFocus={() => setFirstFocused((prev) => ({ ...prev, name: true }))}
          onBlur={() => {
            if (firstFocused.name)
              setTouched((prev) => ({ ...prev, name: true }));
          }}
        />

        <Input
          isRequired
          errorMessage={errors.email}
          isInvalid={touched.email && !!errors.email}
          label="Email"
          name="email"
          type="text"
          autoComplete="email"
          value={email}
          onValueChange={(value) => {
            setEmail(value);
            setErrors((prev) => ({
              ...prev,
              email: getEmailError(value) || "",
            }));
          }}
          onFocus={() => setFirstFocused((prev) => ({ ...prev, email: true }))}
          onBlur={() => {
            if (firstFocused.email)
              setTouched((prev) => ({ ...prev, email: true }));
          }}
        />

        <Input
          isRequired
          errorMessage={errors.password}
          isInvalid={touched.password && !!errors.password}
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onValueChange={(value) => {
            setPassword(value);
            setErrors((prev) => ({
              ...prev,
              password: getPasswordError(value) || "",
            }));
          }}
          onFocus={() =>
            setFirstFocused((prev) => ({ ...prev, password: true }))
          }
          onBlur={() => {
            if (firstFocused.password)
              setTouched((prev) => ({ ...prev, password: true }));
          }}
        />

        <Input
          isRequired
          errorMessage={errors.repeat_password}
          isInvalid={touched.repeat_password && !!errors.repeat_password}
          label="Repeat password"
          type="password"
          autoComplete="new-password"
          value={repeatPassword}
          onValueChange={(value) => {
            setRepeatPassword(value);
            setErrors((prev) => ({
              ...prev,
              repeat_password: getRepeatPasswordError(password, value) || "",
            }));
          }}
          onFocus={() =>
            setFirstFocused((prev) => ({ ...prev, repeat_password: true }))
          }
          onBlur={() => {
            if (firstFocused.repeat_password)
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
              !!getNameError(name) ||
              !!getEmailError(email) ||
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

const SupplierForm = ({ onClose }: { onClose: () => void }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [enterpriseName, setEnterpriseName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [firstFocused, setFirstFocused] = React.useState({
    enterpriseName: false,
    email: false,
    password: false,
    repeat_password: false,
    cnpj: false,
  });
  const [touched, setTouched] = React.useState({
    enterpriseName: false,
    email: false,
    password: false,
    repeat_password: false,
    cnpj: false,
  });
  const [errors, setErrors] = React.useState<{
    enterpriseName?: string;
    email?: string;
    password?: string;
    repeat_password?: string;
    cnpj?: string;
  }>({});

  const getEnterpriseNameError = (value: string): string | null => {
    if (!value) return "Please enter your enterprise name.";
    return null;
  };

  const getEmailError = (value: string): string | null => {
    if (!value) return "Please enter your email.";
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(value))
      return "Invalid email address. Must be a valid email address, with characters before and after the '@' and a '.' with something at the end.";
    return null;
  };

  const getPasswordError = (value: string): string | null => {
    if (value.length < 4) return "Password must be 4 characters or more.";
    if ((value.match(/[A-Z]/g) || []).length < 1)
      return "Password needs at least 1 uppercase letter.";
    if ((value.match(/[^a-z]/gi) || []).length < 1)
      return "Password needs at least 1 symbol.";
    return null;
  };

  const getRepeatPasswordError = (
    value1: string,
    value2: string
  ): string | null => {
    return value1 !== value2 ? "Passwords do not match." : null;
  };

  const getCnpjError = (value: string): string | null => {
    if (!value.replace(/\D/g, "")) return "Please enter your CNPJ.";
    if (value.length !== 18) return "Please enter a valid CNPJ with 14 digits.";
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
    setErrors({});
    const newErrors: {
      enterpriseName?: string;
      email?: string;
      password?: string;
      repeat_password?: string;
      cnpj?: string;
    } = {};
    e.preventDefault();

    if (getEnterpriseNameError(enterpriseName))
      newErrors.enterpriseName = getEnterpriseNameError(enterpriseName) || "";
    const emailError = getEmailError(email) || "";
    if (emailError) newErrors.email = emailError || "";
    const passwordError = getPasswordError(password);
    if (passwordError) newErrors.password = passwordError || "";
    const repeatedPasswordError = getPasswordError(password);
    if (repeatedPasswordError)
      newErrors.repeat_password = repeatedPasswordError || "";
    const cnpjError = getCnpjError(cnpj);
    if (cnpjError) newErrors.cnpj = cnpjError || "";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      await handleSupplierSubmit({ email, password, enterpriseName, cnpj });
    }
  };

  // Handler for supplier form submission
  const handleSupplierSubmit = async (data: {
    enterpriseName: string;
    email: string;
    password: string;
    cnpj: string;
  }) => {
    setIsLoading(true);
    const hashedPassword = await hash(data.password, 10);
    const formattedData = {
      enterpriseName: data.enterpriseName,
      email: data.email,
      password: hashedPassword,
      cnpj: data.cnpj,
      credits: 0,
    };
    const registered = await registerSupplier(formattedData);
    if (registered === "email") {
      errors.email = "An account with this email already exists.";
      setIsLoading(false);
      setErrors(errors);
      return;
    } else if (registered === "cnpj") {
      errors.cnpj = "An account with this CNPJ already exists.";
      setIsLoading(false);
      setErrors(errors);
      return;
    }
    localStorage.setItem("logged_name_debug", data.enterpriseName);
    localStorage.setItem("logged_email_debug", data.email);
    localStorage.setItem("cnpj_debug", data.cnpj.replace(/\D/g, ""));
    setErrors({});
    setIsLoading(false);
    window.location.reload();
  };

  // Clear variables for modal close/reset
  const clearVariables = () => {
    setEnterpriseName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setCnpj("");
    setTouched({
      enterpriseName: false,
      email: false,
      password: false,
      repeat_password: false,
      cnpj: false,
    });
    setErrors({});
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
          errorMessage={errors.enterpriseName}
          isInvalid={touched.enterpriseName && !!errors.enterpriseName}
          label="Enterprise Name"
          name="enterpriseName"
          type="text"
          autoComplete="organization"
          value={enterpriseName}
          onValueChange={(value) => {
            setEnterpriseName(value);
            setErrors((prev) => ({
              ...prev,
              enterpriseName: getEnterpriseNameError(value) || "",
            }));
          }}
          onFocus={() =>
            setFirstFocused((prev) => ({ ...prev, enterpriseName: true }))
          }
          onBlur={() => {
            if (firstFocused.enterpriseName)
              setTouched((prev) => ({ ...prev, enterpriseName: true }));
          }}
        />

        <Input
          isRequired
          errorMessage={errors.email}
          isInvalid={touched.email && !!errors.email}
          label="Email"
          name="email"
          type="text"
          autoComplete="email"
          value={email}
          onValueChange={(value) => {
            setEmail(value);
            setErrors((prev) => ({
              ...prev,
              email: getEmailError(value) || "",
            }));
          }}
          onFocus={() => setFirstFocused((prev) => ({ ...prev, email: true }))}
          onBlur={() => {
            if (firstFocused.email)
              setTouched((prev) => ({ ...prev, email: true }));
          }}
        />

        <Input
          isRequired
          errorMessage={errors.password}
          isInvalid={touched.password && !!errors.password}
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onValueChange={(value) => {
            setPassword(value);
            setErrors((prev) => ({
              ...prev,
              password: getPasswordError(value) || "",
            }));
          }}
          onFocus={() =>
            setFirstFocused((prev) => ({ ...prev, password: true }))
          }
          onBlur={() => {
            if (firstFocused.password)
              setTouched((prev) => ({ ...prev, password: true }));
          }}
        />

        <Input
          isRequired
          errorMessage={errors.repeat_password}
          isInvalid={touched.repeat_password && !!errors.repeat_password}
          label="Repeat password"
          type="password"
          autoComplete="new-password"
          value={repeatPassword}
          onValueChange={(value) => {
            setRepeatPassword(value);
            setErrors((prev) => ({
              ...prev,
              repeat_password: getRepeatPasswordError(password, value) || "",
            }));
          }}
          onFocus={() =>
            setFirstFocused((prev) => ({ ...prev, repeat_password: true }))
          }
          onBlur={() => {
            if (firstFocused.repeat_password)
              setTouched((prev) => ({ ...prev, repeat_password: true }));
          }}
        />

        <Input
          isRequired
          value={cnpj}
          errorMessage={errors.cnpj}
          isInvalid={touched.cnpj && !!errors.cnpj}
          label="CNPJ"
          name="cnpj"
          type="text"
          autoComplete="off"
          onValueChange={(value) => {
            setCnpj(formatCnpj(value));
            setErrors((prev) => ({ ...prev, cnpj: getCnpjError(value) || "" }));
          }}
          onFocus={() => setFirstFocused((prev) => ({ ...prev, cnpj: true }))}
          onBlur={() => {
            if (firstFocused.cnpj)
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
              !!errors.enterpriseName ||
              !!errors.email ||
              !!errors.password ||
              !!errors.repeat_password ||
              !!errors.cnpj
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
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(isOpen) => !isOpen && onClose()}
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
                  <ClientForm onClose={onClose} />
                </Tab>
                <Tab key="supplier" title="Supplier">
                  <SupplierForm onClose={onClose} />
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
