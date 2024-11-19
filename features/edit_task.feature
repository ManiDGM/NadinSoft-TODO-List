Feature: TODO List Functuality

    Scenario: Editing an existing task
    Given I have a task "New task" in my task list
    When I click on "Edit button" 
    And change the text to "Another new task"
    Then the task should update to "Another new task" in the task list
