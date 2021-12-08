const { validate } = require("./validateCPF");

test("espera validar um CPF incorreto",()=>{
    const cpf = "111.111.111-11";
    const isValidated = validate(cpf);

    expect(isValidated).toBe(false);
});

test("espera validar um CPF incorreto",()=>{
    const cpf = "23.456.789-99";
    const isValidated = validate(cpf);

    expect(isValidated).toBe(false);
});

test("espera validar um CPF correto",()=>{
    const cpf = "935.411.347-80";
    const isValidated = validate(cpf);

    expect(isValidated).toBe(true);
});
