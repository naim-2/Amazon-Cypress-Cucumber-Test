Feature: Product Details

  Scenario: Verify product details on Amazon
    Given I am on the Amazon homepage
    When I search for "laptop"
    And I click on the first product
    Then I should see the product title
    And the product price should be displayed
