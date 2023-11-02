describe('User can create new user', () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8000/");
    cy.exec('cd demo-app-cypress-automation && php artisan migrate:fresh --seed', { timeout: 130000 });
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get(':nth-child(2) > .has-dropdown').click();
    cy.get('.active > .dropdown-menu > li > .nav-link').click();
    cy.get('.card-header-action > .btn-icon').click();
  });

  //positive case
  it('User can create new user with valid login and input valid typing username, email, and password', () => {
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    cy.get('.alert').should("contain", "Berhasil");
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  });

  //negative case
  it('User can not create new user because invalid email type', () => {
    cy.get('#name').type('baru');
    cy.get('#email').type('baruATgmail.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback').should("contain", "must be a valid email address");
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  });

  //negative case
  it('User can not create new user because name required', () => {
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback').should("contain", "required");
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  });

  //negative case
  it.only('User can not create new user because password required', () => {
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('.btn-primary').click();
    cy.get('.invalid-feedback').should("contain", "required");
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
  });


});