export const criarUsuario = () => {
  const email = `pgats-aut-test_101-${Date.now()}@mail.com`

  return {
    nome: 'PGATS AUT 101',
    email: `${email}`,
    senha: '12345',
    diaNascimento: '1',
    primeiroNome: 'PGATS',
    sobrenome: 'Aut',
    empresa: 'PGATS',
    endereco: 'Example Address',
    pais: 'United States',
    estado: 'California',
    cidade: 'San Francisco',
    cep: '12345',
    telefone: '999999999'
  }
}