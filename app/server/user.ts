"use server";
import prisma from "../../lib/prisma";

type ClientData = {
  name: string;
  email: string;
  password: string;
  credits: number;
};

type SupplierData = {
  enterpriseName: string;
  email: string;
  password: string;
  cnpj: string;
  credits: number;
};

async function checkUserEmail(email: string) {
  let existingUser = await (prisma as any).client.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return true;
  } else {
    existingUser = await (prisma as any).supplier.findUnique({
      where: {
        email: email,
      },
    });
  }
  return existingUser ? true : false;
}

export async function registerClient(client: ClientData) {
  const existingUser = await checkUserEmail(client.email);
  if (existingUser) {
    return "email";
  }

  await (prisma as any).client.create({
    data: {
      name: client.name,
      email: client.email,
      password: client.password,
      credits: client.credits,
    },
  });

  return null;
}

async function checkSupplierCnpj(cnpj: string) {
  const existingUser = await (prisma as any).supplier.findUnique({
    where: {
      cnpj: cnpj,
    },
  });
  return existingUser ? true : false;
}

export async function registerSupplier(supplier: SupplierData) {
  const existingUserEmail = await checkUserEmail(supplier.email);
  if (existingUserEmail) {
    return "email";
  }
  const existingUserCnpj = await checkSupplierCnpj(supplier.cnpj);
  if (existingUserCnpj) {
    return "cnpj";
  }

  await (prisma as any).supplier.create({
    data: {
      name: supplier.enterpriseName,
      email: supplier.email,
      password: supplier.password,
      cnpj: supplier.cnpj,
      credits: supplier.credits,
    },
  });

  return null;
}

export async function findUser(email: string) {
  let existingUser = await (prisma as any).client.findUnique({
    where: {
      email: email,
    },
  });
  if (!existingUser) {
    existingUser = await (prisma as any).supplier.findUnique({
      where: {
        email: email,
      },
    });
  }
  return JSON.parse(JSON.stringify(existingUser));
}
