Feature: Develop E2E automated JS tests
    Background:
        Given I am on the home page
        * I am closing the promo banner if it appears

Scenario: Search bar

    When Entry the word "Windows" in the search bar
    * Click the search
    Then I check that at least one item appears

Scenario: Internet shop logo button

    When Open "Today's Best Deals" tab
    * Click on the Internet shop logo
    Then I check that the main page opened