import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pet.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      id: '12345678-1234-1234-1234-123456789012',
      name: 'Usuário Teste',
      email: 'teste@petcare.com',
      password: 'senha-criptografada-fake',
      pets: {
        create: [
          { id: '11111111-1111-1111-1111-111111111111', name: 'Oscar' },
          { id: '22222222-2222-2222-2222-222222222222', name: 'Rex' }
        ]
      }
    }
  });
  console.log('Seed executado com sucesso! Usuário criado:', user.name);
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });