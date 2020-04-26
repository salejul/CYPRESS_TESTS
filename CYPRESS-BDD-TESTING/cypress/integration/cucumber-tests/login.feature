Feature: Login to application

    As a invalid user
    I can not login ino the application
    As a valid user
    I want to log into the application

    Scenario: Invalid login
        Given I open login page
        And I wait for 2000 milliseconds
        And I reload the browser
        When I fill username with "invalid username"
        And I fill password with "Invalid password"
        And I click on submit login
        Then I should see error message

    #@focus
    Scenario: Valid login
        Given I open login page
        And I see "Zero - Log in" in the title
        And I see "/login" in the url
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit login
        Then I should see homepage



