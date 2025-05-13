"use server";
import prisma from '../../lib/prisma';

export type ClientData = {
  name: string;
  email: string;
  password: string;
  credits: number;
};

export async function registerClient(data: ClientData) {
  
  const existingUser = await checkClient(data.email);
  if (existingUser) {
    return false;
  }

  await prisma.client.create({
  data: {
    email: data.email,
    name: data.name,
    password: data.password,
    credits: data.credits
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