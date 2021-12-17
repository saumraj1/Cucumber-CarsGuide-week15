package com.carsguide.steps;

import com.carsguide.pages.FindADealerPage;
import com.carsguide.pages.HomePage;
import com.carsguide.pages.NewAndUsedCarSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class BuyPageSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
        System.out.println("I am On Home Page");
    }

    @When("^I mouse hover on \"([^\"]*)\" tab$")
    public void iMouseHoverOnTab(String selectMenu) throws InterruptedException {
        new HomePage().mouseHoverOnBuyAndSell(selectMenu);
    }

    @And("^I click \"([^\"]*)\" link$")
    public void iClickLink(String selectFromBuyList) {
        new HomePage().selectFromSubMenuBuyList(selectFromBuyList);
    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String expected)  {
        Assert.assertEquals(expected, new NewAndUsedCarSearchPage().verifyHeaderCarSearchPage());
    }

       @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String makeSelect){
        new NewAndUsedCarSearchPage().selectMakeFromDropDown(makeSelect);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String modelSelect) throws Throwable {
        new NewAndUsedCarSearchPage().selectModelsFromDropDown(modelSelect);

    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String locationSelect) throws Throwable {
        new NewAndUsedCarSearchPage().selectLocationFromDropDown(locationSelect);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String priceSelect){
        new NewAndUsedCarSearchPage().selectPriceFromDropDown(priceSelect);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarSearchPage().clickOnFindNextCarButton();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {
        new NewAndUsedCarSearchPage().setMakeVerify(make);
    }




    @And("^I click on Page \"([^\"]*)\"$")
    public void iClickOnPage(String i)  {
        new FindADealerPage().clickOnPage(i);
    }

    @Then("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String dealerName) throws InterruptedException {
        new FindADealerPage().findDealer(dealerName);

    }
}
