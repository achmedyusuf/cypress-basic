describe('user can edit existing data', () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8000/");
    cy.exec('cd demo-app-cypress-automation && php artisan migrate:fresh --seed', { timeout: 130000 });
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get(':nth-child(2) > .has-dropdown').click();
    cy.get('.active > .dropdown-menu > li > .nav-link').click();
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    cy.get('.alert').should("contain", "Berhasil");
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('[data-id="logout-btn"').click();
  });

  it.only('User can edit existing data', () => {
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.get(':nth-child(2) > .has-dropdown').click();
    cy.get('.active > .dropdown-menu > li > .nav-link').click();
    cy.get('.table td').contains('baru').parent().find('a').contains('Edit').click();
    cy.get('#name').clear('user');
    cy.get('#name').type('baru edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('baru').should('have.text', 'baru edited');
    cy.get('.alert').should('be.visible')
      .and('have.class', 'alert-success')
      .and('contain', 'User Berhasil Diupdate');
  });
});