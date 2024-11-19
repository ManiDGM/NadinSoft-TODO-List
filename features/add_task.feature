Feature: TODO List Functuality

    Scenario: Adding a new task
    Given I open TODO List aplication
    When I enter "New task" in the task input field
    And I click the "Add Task" button
    Then I should see "New task" in the task list


    Scenario: Preventing empty task addition
    Given I open TODO List aplication
    When I leave the task input empty
    And I click the "Add Task" button
    Then I should not see any new tasks in the task list


    Scenario: Marking a task as completed
    Given I have a task "New task" in the task list
    When I click the "Complete" button for the task
    Then the task "New task" should appear with a line through it