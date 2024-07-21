import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const BATCH_SIZE = 50;
  const TOTAL_BATCHES = 6;

  for (let i = 0; i < TOTAL_BATCHES; i++) {
    const names = new Array(BATCH_SIZE).fill(0).map(() => faker.commerce.productName());

    await prisma.category.createMany({
      data: names.map((name) => ({ name })),
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
