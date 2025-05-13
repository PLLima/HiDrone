"use server";
import prisma from '../../lib/prisma';

export type ClientData = {
  name: string;
  email: string;
  password: string;
  credits: number;
};

export async function registerClient(client: ClientData) {
  
  const existingUser = await checkClient(client.email);
  if (existingUser) {
    return false;
  }

  await prisma.client.create({
  data: {
    email: client.email,
    name: client.name,
    password: client.password,
    credits: client.credits
  },
})

  return true;
}

export async function checkClient(email: string) {
  const existingUser = await prisma.client.findUnique({
    where: {
      email: email,
    },
  });
  return existingUser ? true : false;
}