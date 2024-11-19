Feature: TODO List functuality

    Scenario: Deleting a task
    Given I have a task "New task" in the task list
    When I click the "Delete" button for the task
    Then the task "New task" should no longer appear in the task list