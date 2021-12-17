$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "30000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "NSW - New England",
        "80000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Sydney",
        "60000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Alfa Romeo",
        "147",
        "ACT - All",
        "30000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Audi",
        "Q3",
        "ACT - All",
        "40000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Land Rover",
        "Discovery",
        "VIC - Central Victoria",
        "90000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6528653400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 108896600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 233310600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 116976400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 656259200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1664880000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 168922300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 168312600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 80333100,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 68822000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 4789919300,
  "status": "passed"
});
formatter.after({
  "duration": 678813100,
  "status": "passed"
});
formatter.before({
  "duration": 6469175900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"2 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"80000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 92500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 207811800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 157034000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 752271400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1447772200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Series",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 103817100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 75046700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 72891000,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 77506900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 4824867700,
  "status": "passed"
});
formatter.after({
  "duration": 714901500,
  "status": "passed"
});
formatter.before({
  "duration": 4512796600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"60000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 321812400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 114138500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 422957800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 662471300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 217655800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 78348800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 69898500,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 73868500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 3187591200,
  "status": "passed"
});
formatter.after({
  "duration": 678955000,
  "status": "passed"
});
formatter.before({
  "duration": 4382004700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Alfa Romeo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"147\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Alfa Romeo\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 174553500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 188298400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 1310141000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 87745300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "147",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 609912800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 75045900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 77642600,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 90290900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 3555046800,
  "status": "passed"
});
formatter.after({
  "duration": 668123800,
  "status": "passed"
});
formatter.before({
  "duration": 3846253000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Q3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 52300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 202945700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 200322300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 969570200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 221350700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q3",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 250768100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 65779000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 83862300,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 97053900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 4439486300,
  "status": "passed"
});
formatter.after({
  "duration": 675605000,
  "status": "passed"
});
formatter.before({
  "duration": 3190730700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Discovery\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"VIC - Central Victoria\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"90000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Land Rover\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 46100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 602415000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 1503838300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 160132300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 83763200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discovery",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 572629700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - Central Victoria",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 68111200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 72109200,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6905619600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 110827900,
  "status": "passed"
});
formatter.after({
  "duration": 666032200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#      | Nissan     | Qashqai   | SA - North             | 50000 |"
    },
    {
      "line": 25,
      "value": "#  Add 6 data sets here."
    }
  ],
  "line": 27,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "30000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "NSW - New England",
        "80000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4175008400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 172748900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 315691300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 1355998500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 233837900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 94382900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 84624500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 69782600,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 53952200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 4255681100,
  "status": "passed"
});
formatter.after({
  "duration": 672828900,
  "status": "passed"
});
formatter.before({
  "duration": 3929652500,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I navigate to \"Used Cars For Sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select model \"2 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select price \"80000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 154429900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 179264500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 1135785800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyPageSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 280741100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Series",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 116504400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "BuyPageSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 83479300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 16
    }
  ],
  "location": "BuyPageSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 74362400,
  "status": "passed"
});
formatter.match({
  "location": "BuyPageSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 78260100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 4896063400,
  "status": "passed"
});
formatter.after({
  "duration": 688708700,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Page \"\u003cpageNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"\u003cdealersName\u003e\" are display on page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "dealersName",
        "pageNo"
      ],
      "line": 10,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping",
        "1"
      ],
      "line": 11,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    },
    {
      "cells": [
        "4WD Specialist Group",
        "2"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3"
    },
    {
      "cells": [
        "5 Star Auto",
        "3"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd",
        "4"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY",
        "5"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTOR SERVICE",
        "6"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4033234000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Page \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 160920100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Dealer",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 234988900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "BuyPageSteps.iClickOnPage(String)"
});
formatter.result({
  "duration": 2065101100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 31
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 189061400,
  "status": "passed"
});
formatter.after({
  "duration": 649815700,
  "status": "passed"
});
formatter.before({
  "duration": 3979576600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Page \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"4WD Specialist Group\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 62600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 185508400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Dealer",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 193046400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "BuyPageSteps.iClickOnPage(String)"
});
formatter.result({
  "duration": 2482175200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WD Specialist Group",
      "offset": 31
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 67451100,
  "status": "passed"
});
formatter.after({
  "duration": 659659800,
  "status": "passed"
});
formatter.before({
  "duration": 6700012100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Page \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"5 Star Auto\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 178215100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Dealer",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 174309500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "BuyPageSteps.iClickOnPage(String)"
});
formatter.result({
  "duration": 2472846400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto",
      "offset": 31
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 47301700,
  "status": "passed"
});
formatter.after({
  "duration": 672893300,
  "status": "passed"
});
formatter.before({
  "duration": 3342275100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Page \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"A \u0026 M Car Sales Pty Ltd\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 445027600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Dealer",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 233758700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "BuyPageSteps.iClickOnPage(String)"
});
formatter.result({
  "duration": 2632304600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A \u0026 M Car Sales Pty Ltd",
      "offset": 31
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 138359600,
  "status": "passed"
});
formatter.after({
  "duration": 665820800,
  "status": "passed"
});
formatter.before({
  "duration": 5878017300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Page \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"A1 MOTORS COMPANY\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 176989100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Dealer",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 843134300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 17
    }
  ],
  "location": "BuyPageSteps.iClickOnPage(String)"
});
formatter.result({
  "duration": 1324535900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 MOTORS COMPANY",
      "offset": 31
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 41260700,
  "status": "passed"
});
formatter.after({
  "duration": 684419000,
  "status": "passed"
});
formatter.before({
  "duration": 4010243900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Find a Dealer\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Page \"6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \"ANDREA MOTOR SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuyPageSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 177334700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find a Dealer",
      "offset": 9
    }
  ],
  "location": "BuyPageSteps.iClickLink(String)"
});
formatter.result({
  "duration": 217887400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 17
    }
  ],
  "location": "BuyPageSteps.iClickOnPage(String)"
});
formatter.result({
  "duration": 2413135700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTOR SERVICE",
      "offset": 31
    }
  ],
  "location": "BuyPageSteps.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 80991400,
  "status": "passed"
});
formatter.after({
  "duration": 657433100,
  "status": "passed"
});
});