"use server";
import prisma from '../../lib/prisma';

export type ClientData = {
  name: string;
  email: string;
  password: string;
  credits: number;
};

export type SupplierData = {
  name: string;
  email: string;
  password: string;
  cnpj: string;
}

export async function checkClient(email: string) {
  const existingUser = await (prisma as any).client.findUnique({
    where: {
      email: email,
    },
  });
  return existingUser ? true : false;
}

export async function registerClient(client: ClientData) {
  
  const existingUser = await checkClient(client.email);
  if (existingUser) {
    return false;
  }

  await (prisma as any).client.create({
  data: {
    name: client.name,
    email: client.email,
    password: client.password,
    credits: client.credits,
  },
})

  return true;
}

export async function checkSupplier(email: string, cnpj: string) {
  const existingUser = await (prisma as any).supplier.findUnique({
    where: {
    OR: [
      { email: email },
      { cnpj: cnpj },
    ]
    },
  });
  return existingUser ? true : false;
}

export async function registerSupplier(supplier: SupplierData) {
  
  const existingUser = await checkSupplier(supplier.email, supplier.cnpj);
  if (existingUser) {
    return false;
  }

  await (prisma as any).supplier.create({
  data: {
    name: supplier.name,
    email: supplier.email,
    password: supplier.password,
    cnpj: supplier.cnpj,
  },
  })

  return true;
}