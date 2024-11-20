describe('TODO List Functionality', () => {
  beforeEach(() => {
      // visit the application before each test
      cy.visit('http://127.0.0.1:5500/index.html'); // local server
  });

  it('should add a new task to the list', () => {
      cy.get('#taskInput').type('New task');
      cy.get('#addTaskButton').click();
      cy.get('#taskList').should('contain', 'New task');
  });

  it('should prevent adding an empty task', () => {
      cy.get('#addTaskButton').click();
      cy.get('#taskList').children().should('have.length', 0);
  })
});
