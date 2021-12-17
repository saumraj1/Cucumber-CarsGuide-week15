Feature: Search functionality

  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on "buy + sell" tab
    And I click "Search Cars" link
    Then I navigate to "New & Used Car Search - carsguide" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make       | model     | location               | price |
      | Audi       | A3        | NSW - All              | 30000 |
      | BMW        | 2 Series  | NSW - New England      | 80000 |
      | Honda      | CR-V      | NSW - Sydney           | 60000 |
      | Alfa Romeo | 147       | ACT - All              | 30000 |
      | Audi       | Q3        | ACT - All              | 40000 |
      | Land Rover | Discovery | VIC - Central Victoria | 90000 |
#      | Nissan     | Qashqai   | SA - North             | 50000 |

#  Add 6 data sets here.

  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on "buy + sell" tab
    And I click "Used" link
    Then I navigate to "Used Cars For Sale" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make | model    | location          | price |
      | Audi | A3       | NSW - All         | 30000 |
      | BMW  | 2 Series | NSW - New England | 80000 |

#      | Honda      | CR-V      | NSW - Sydney           | 60000 |
#      | Hyundai    | I30       | NSW - Newcastle        | 40000 |
#      | Land Rover | Discovery | VIC - Central Victoria | 90000 |
#      | Nissan     | Qashqai   | SA - North             | 50000 |
