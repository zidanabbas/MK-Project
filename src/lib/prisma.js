import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

let prisma;

if (typeof global !== "undefined" && !global.prisma) {
  prisma = prismaClientSingleton();
}

export default prisma;

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
