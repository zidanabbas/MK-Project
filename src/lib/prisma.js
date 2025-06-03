import { PrismaClient } from "@prisma/client";

// deklarasi variable global prisma
let prisma;

// validasi apakah ada dilingkungan production atau development
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  // Gunakan instance dari global
  prisma = global.prisma;
}

export default prisma;
