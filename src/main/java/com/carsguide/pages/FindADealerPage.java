package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

import java.util.List;


public class FindADealerPage extends Utility {
//https://stackoverflow.com/questions/35747252/navigate-between-pages-with-selenium-java
    //div[@class='container dealer-result-container']//div[@class='dealerListing--name']//a
    //a[@data-gtm-category='search results']
    //div[@class='listing-pagination']//li[@class='']
    @CacheLookup
    @FindBy(xpath = "//div[@class='listing-pagination']//li[@class='']//a")
    List<WebElement> pages;
    @CacheLookup
    @FindBy(xpath = "//div[@class='container dealer-result-container']//div[@class='dealerListing--name']//a")
//    @FindBy(xpath = "//div[@class='dealer-listings row']//div[@class='dealerListing--name']//a")
    List<WebElement> dealersList;

    public String clickOnPage( String p) {
        String dealerNm = "";
        for (WebElement page : pages) {
//            System.out.println(page.getText());
            if (page.getText().equals(p) && (p!="1")) {
                page.click();
//                waitForElementWithFluentWait(page, 2,60);
                break;
            }
        }

        return dealerNm;
    }
    public String findDealer(String dealerName) throws InterruptedException {
        String dealerNm = "";
//        Thread.sleep(2000);

        for (WebElement dealer:dealersList) {
            if (dealer.getText().equals(dealerName))
            {
                dealerNm=  dealer.getText();
//                System.out.println(dealer.getText());
                break;
            }
        }
        return dealerNm;
    }

}

