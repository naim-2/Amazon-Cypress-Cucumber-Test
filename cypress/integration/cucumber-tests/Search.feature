Feature: Amazon Search

Scenario: Search for a product on Amazon
    Given I am on the Amazon homepage
    When I search for "laptop"
    Then I should see search results for "laptop"