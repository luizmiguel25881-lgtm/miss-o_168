// importação do módulo de validação
const { validateLead } = require("../src/validation");

describe("aplicação de testes para a função validateLead", () => {

  test("verifica se o nome é válido", () => {
        // passamos um nome com apenas 1 
    const result = validateLead({ name: "jão",
         email: "jão@example.com" });
         expect(result.errors.length).toBe(0);
         //expect(result.valid).toBe(false);

    
  });

  test("verifica se o nome tem menos de 3 caracteres", () => {

    const result = validateLead({ name: "j",
         email: "jão@example.com" });
    expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");

    
  });
  // 1. Cadastro completo válido
  test("aceita um cadastro completo válido", () => {
    const result = validateLead({
      name: "João Silva",
      email: "joao@example.com",
      phone: "11999999999",
      interest: "Online"
    });

    expect(result.valid).toBe(true);
  });

  // 2. Cadastro mínimo válido
  test("aceita um cadastro mínimo válido", () => {
    const result = validateLead({
      name: "João Silva",
      email: "joao@example.com"
    });

    expect(result.valid).toBe(true);
  });

  // 3. Nome com menos de 3 caracteres
  test("rejeita um nome com menos de 3 caracteres", () => {
    const result = validateLead({
      name: "Jo",
      email: "jo@example.com"
    });

    expect(result.valid).toBe(false);
  });

  // 4. Nome contendo apenas espaços
  test("rejeita um nome com espaços vazios", () => {
    const result = validateLead({
      name: "   ",
      email: "joao@example.com"
    });

    expect(result.valid).toBe(false);
  });

  // 5. Nome com tipo incorreto
  test("rejeita um nome que não seja string", () => {
    const result = validateLead({
      name: 123,
      email: "joao@example.com"
    });

    expect(result.valid).toBe(false);
  });

  // 6. E-mail sem @
  test("rejeita um e-mail sem @", () => {
    const result = validateLead({
      name: "João Silva",
      email: "joaoexample.com"
    });

    expect(result.valid).toBe(false);
  });

  // 7. E-mail incompleto
  test("rejeita um e-mail sem domínio completo", () => {
    const result = validateLead({
      name: "João Silva",
      email: "email@email"
    });

    expect(result.valid).toBe(false);
  });

  // 8. E-mail com tipo incorreto
  test("rejeita um e-mail que não seja string", () => {
    const result = validateLead({
      name: "João Silva",
      email: 123
    });

    expect(result.valid).toBe(false);
  });

  // 9. Telefone com tipo incorreto
  test("rejeita um telefone numérico", () => {
    const result = validateLead({
      name: "João Silva",
      email: "joao@example.com",
      phone: 11999999999
    });

    expect(result.valid).toBe(false);
  });

  // 10. Modalidade inválida
  test("rejeita uma modalidade inexistente", () => {
    const result = validateLead({
      name: "João Silva",
      email: "joao@example.com",
      interest: "Presencial XYZ"
    });

    expect(result.valid).toBe(false);
  });

  // 11. Modalidade com letras minúsculas
  test("rejeita modalidade com diferenciação de caixa", () => {
    const result = validateLead({
      name: "João Silva",
      email: "joao@example.com",
      interest: "online"
    });

    expect(result.valid).toBe(false);
  });

});




