package com.urbanladderbdd.PageObjects;

import java.util.List;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.urbanladderbdd.UIStore.HomePageUI;

public class HomePage {

	public WebDriver driver;
	
	public HomePage(WebDriver driver) {
		this.driver=driver;
	}
	
	HomePageUI hpui=new HomePageUI();
	public void ClosingPopUp()
	{
		driver.findElement(hpui.closePopUp).click();
	}
	public void getCartPage() {
		driver.findElement(hpui.cartId).click();
	}
	public void getGiftCards() {
		driver.findElement(hpui.giftCardsId).click();
	}
	public void getDigitalcards()
	{
		if(driver.findElement(hpui.dcId).isDisplayed())
		{
			System.out.println("Digital cards is available");
		}
		else
		{
			System.out.println("Digital cards is not available");
		}
	}
	public void getSearch() {
		driver.findElement(hpui.searchId);
		driver.findElement(hpui.searchId).sendKeys("Apollo Sofa Sets");
		driver.findElement(hpui.searchId).sendKeys(Keys.ENTER);
	}
	public void getBRoom() {
		driver.findElement(hpui.bedRoomsId).click();
	}
	
	public void getBRItem() {
		driver.findElement(hpui.brItem).click();
	}
	
	public void getSelectType() {
		driver.findElement(hpui.selectType).click();
	}
	
	public void getNArrivals() {
		driver.findElement(hpui.newId).click();
	}
	public void getSale() {
		driver.findElement(hpui.saleId).click();
	}
	public void getBedsSection() {
		driver.findElement(hpui.bedsId).click();
	}
	public void getPavisBed() {
		driver.findElement(hpui.pavisId).click();
	}
	public void getPavisWindowHandle() {
		driver.navigate().forward();
	}
	public WebElement Chat()
	{
		return driver.findElement(hpui.chatbox);
	}
	public WebElement ChatFrame()
	{
		return driver.findElement(hpui.botchat);
	}
	public WebElement ChatBot()
	{
		return driver.findElement(hpui.chatwith);
	}
	public WebElement ChattBox()
	{
		return driver.findElement(hpui.chatText);
	}
	
	public void getSearchChairs() {
		driver.findElement(hpui.searchId);
		driver.findElement(hpui.searchId).sendKeys("Chairs");
		driver.findElement(hpui.searchId).sendKeys(Keys.ENTER);
	}
	public WebElement GetCheckBox()
	{
		return driver.findElement(hpui.Checkbox);
	}
	public WebElement GetProductsCount()
	{
		return driver.findElement(hpui.productCount);
	}
	public WebElement TrackOrder()
	{
		return driver.findElement(hpui.trackId);
	}
	public WebElement Orderid()
	{
		return driver.findElement(hpui.orderId);
	}
	public WebElement PhoneNumber()
	{
		return driver.findElement(hpui.phno);
	}
	public List<WebElement> AllCities()
	{
		return driver.findElements(hpui.allcities);
    }
	public void getHelpPage() {
		driver.findElement(hpui.helpId).click();
	}
	
	public void getContactUs() {
		driver.findElement(hpui.cusId).click();
	}
}
