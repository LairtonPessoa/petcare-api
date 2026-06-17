import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'teste@petcare.com' },
    update: {},
    create: {
      id: '12345678-1234-1234-1234-123456789012', // ID fixo que usaremos no Controller
      name: 'Usuário Teste',
      email: 'teste@petcare.com',
      password: 'senha-criptografada-fake',
      pets: {
        create: [
          { id: '11111111-1111-1111-1111-111111111111', name: 'Rex' },
          { id: '22222222-2222-2222-2222-222222222222', name: 'Miau' }
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