package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

/**
 * By Nidhi Patel
 **/
public class NewAndUsedCarSearchPage extends Utility {

    @FindBy(xpath = "//div[contains(@class,'heading main-heading')]//h1")
    WebElement verifyHeader;
    @FindBy(id = "makes")
    WebElement makeSelect;
    @FindBy(id = "models")
    WebElement modelsSelect;
    @FindBy(id = "locations")
    WebElement locationSelect;
    @FindBy(id ="priceTo")
    WebElement priceSelect;
    @CacheLookup
    @FindBy(id = "search-submit")
    WebElement findNextCarButton;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement makeVerify;

    public String verifyHeaderCarSearchPage(){

        return verifyHeader.getText();
    }
    public void selectMakeFromDropDown(String selectMake){
        iSelectByValueFromDropDown(makeSelect,selectMake);
    }
    public void selectModelsFromDropDown(String selectModels){
        iSelectByValueFromDropDown(modelsSelect,selectModels);
    }
    public void selectLocationFromDropDown(String selectLocation){
        iSelectByValueFromDropDown(locationSelect,selectLocation);
    }
    public void selectPriceFromDropDown(String selectPrice){
        iSelectByValueFromDropDown(priceSelect,selectPrice);
    }
    public void clickOnFindNextCarButton(){
        iClickOnElement(findNextCarButton);
    }

    public Boolean setMakeVerify(String make){
      /*  System.out.println(makeVerify.getText());
        System.out.println(makeVerify.getText().contains(make));*/
        return makeVerify.getText().contains(make);
    }



}
