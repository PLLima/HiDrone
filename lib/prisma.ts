// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // This makes TypeScript happy about our global caching in dev
  // –––
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const isProduction = process.env.NODE_ENV === 'production';

// Create the client, optionally with some logging to surface errors early
const prismaClient = new PrismaClient({
  log: ['info', 'warn', 'error', 'query'],
});

// In non-production we attach to the global so hot-reload / module-reload
// doesn’t create new clients on every file-save
if (!isProduction) {
  if (!global.prisma) {
    global.prisma = prismaClient;
  }
}
const prisma = isProduction ? prismaClient : global.prisma!;

export default prisma;