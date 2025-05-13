import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

let prisma: any;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient().$extends(withAccelerate());
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient().$extends(withAccelerate());
  }
  prisma = (global as any).prisma;
}

export default prisma;