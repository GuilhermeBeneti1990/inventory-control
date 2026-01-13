import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: "./dev.db",
});

export const prismaClient = new PrismaClient({
  adapter,
  log: ["query", "error", "warn"],
});
