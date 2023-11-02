describe('template spec', () => {
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
  it('12345', () => {
    cy.get('.table td').contains('user baru').parent().find('a').contains('Edit').click();
    cy.get('#name').clear('user baru');
    cy.get('#name').type('baru teredited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('baru teredit').should('have.text', 'baru teredit');
    cy.get('.alert').should('be.visible')
      .and('have.class', 'alert-success')
      .and('contain', 'User Berhasil Diupdate');
  });

})