describe("Login", () => {
  it("Realizar login com sucesso", () => {
    // Instruções do nosso teste (arrange)
    cy.visit("https://www.saucedemo.com/");

    // Açoes que iremos válidar (act)
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");

    cy.get('[data-test="login-button"]').click();

    // Assert

    cy.url().should("equal", "https://www.saucedemo.com/inventory.html");
  });

  it("Realizar login informando credenciais inválidas", () => {
    // Instruções do nosso teste (arrange)
    cy.visit("https://www.saucedemo.com/");

    // Açoes que iremos válidar (act)
    cy.get('[data-test="username"]').type("user.invalid");
    cy.get('[data-test="password"]').type("password.invalid");

    cy.get('[data-test="login-button"]').click();

    // Assert

    cy.get('[data-test="error"]').should(
      "contain.text",
      "Username and password do not match any user in this service",
    );

    cy.url().should('equal' , 'https://www.saucedemo.com/')
  });
});
