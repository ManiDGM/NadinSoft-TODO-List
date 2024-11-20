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
   });

  it('should mark  a task as completed', () => {
      cy.get('#taskInput').type('New task');
      cy.get('#addTaskButton').click();
      cy.get('#taskList li button i.fa-check').click();
   });

  it('should edit a task', () => {
      cy.get('#taskInput').type('New task');
      cy.get('#addTaskButton').click();
      cy.get('#taskList li button i.fa-edit').click();
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Another new task');
    });
      cy.get('#taskList li span').should('contain', 'Another new task');    //Note: write "Another new task" while testing the code in cypress
   });                                                                      // TODO: fix the problem
  
   it('shoult delete a task', () => {
       cy.get('#taskInput').type('New task');
       cy.get('#addTaskButton').click();
       cy.get('#taskList li button i.fa-trash').click();
       cy.get('#taskList').should('not.contain', 'New task')
   });

});
