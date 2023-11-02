describe("User Can Login to System", () => {
  //positive case
  it.only("User can login with valid username and password", () => {
    cy.visit("http://127.0.0.1:8000/");
    cy.get('[data-id="email"').type("superadmin@gmail.com");
    cy.get('[data-id="password"').type("password");
    cy.get('[data-id="submit"').click();
    cy.get('[data-id="username"').should("contain", "Hi");
    cy.get('[data-id="username"').should("contain", "SuperAdmin");
    cy.get('[data-id="username"').click();
    cy.get('[data-id="logout-btn"').click();
  });

  //negative case
  it("User can't login with valid username and wrong password", () => {
    cy.visit("http://127.0.0.1:8000/");
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("pasword");
    cy.get('.btn').click();
    cy.get('.invalid-feedback').should("contain", "not match")
  });

  //negative case
  it("User can't login with wrong username and valid password", () => {
    cy.visit("http://127.0.0.1:8000/");
    cy.get(':nth-child(2) > .form-control').type("superadmisdsadsan@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    cy.get('.invalid-feedback').should("contain", "not match")
  });

  //negative case
  it("User can't login with valid username and empty password", () => {
    cy.visit("http://127.0.0.1:8000/");
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get('.btn').click();
    cy.get('.invalid-feedback').should("contain", "required")
  });

  //negative case
  it("User can't login with empty username and valid password", () => {
    cy.visit("http://127.0.0.1:8000/");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();
    cy.get('.invalid-feedback').should("contain", "required")
  });
});