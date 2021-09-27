package com.urbanladderbdd.UIStore;

import org.openqa.selenium.By;

public class HomePageUI {

	public final By closePopUp=By.cssSelector("a[data-gaaction=\"popup.auth.close\"]");
	
	//1
	public final By cartId=By.xpath("//div[@id='cart-badge']");
	
	//2
	public final By giftCardsId=By.xpath("//section[@class='featuredLinksBar']//li[3]");
	public final By dcId=By.xpath("//h5[normalize-space()='Digital Cards']");
	
	//3,7
	public final By searchId=By.cssSelector("#search");
	public final By Checkbox=By.cssSelector("[id=\"filters_availability_In_Stock_Only\"]");
	public final By productCount=By.cssSelector("[class=\"results-count\"]");
	
	//4
	public final By bedRoomsId=By.xpath("//span[@class='topnav_itemname'][normalize-space()='Bedroom']");
	public final By brItem=By.xpath("//span[normalize-space()='King Size Beds']");
	public final By selectType=By.xpath("//div[@class='item']//div[@class='gname']");
	public final By newId=By.xpath("//li[normalize-space()='New Arrivals']");
//	public final By TvUnitsId=By.xpath("//h4[normalize-space()='TV Units']");
//	public final By TvItemId=By.xpath("//a[@title='Zephyr Large TV Unit (Mahogany Finish)']");
	
	//5
	public final By saleId=By.xpath("//span[normalize-space()='Sale']");
	public final By bedsId=By.xpath("//span[normalize-space()='Beds']");
	public final By pavisId=By.xpath("//img[@title='Pavis Storage Bed (Queen Bed Size, Box Storage Type, Classic Walnut Finish)']");
	public final By priceId=By.xpath("//div[@class='price discounted-price']");
	
	//6
	public final By chatbox=By.id("fc_widget");
	public final By botchat=By.className("icon-ic_chat_icon");
	public final By chatwith=By.className("channel-name");
	public final By chatText=By.id("app-conversation-editor");
	
	//8
	public final By orderId=By.name("orderNumber");
	public final By phno=By.name("phoneNumber");
	public final By allcities=By.cssSelector("div[class*='location__taxon__city']");
	
	//9
	public final By helpId=By.xpath("//a[@class='inherit contact-channel'][normalize-space()='Help']");
	public final By cusId=By.xpath("//a[normalize-space()='Contact Us']");
	//unused
	public final By storeId=By.xpath("//a[@class='featuredLinksBar__link'][normalize-space()='Stores']");
	public final By locId=By.xpath("(//button[@type='button'][normalize-space()='View Details'])[2]");
	public final By mapId=By.xpath("//a[normalize-space()='View on Google Maps']");
	public final By trackId=By.xpath("//a[normalize-space()='Track Order']");
	public final By logtoTrackId=By.xpath("//button[normalize-space()='Login To Track All Your Orders']");
		
	//Login
	public final By emailId=By.id("spree_user_email");
	public final By passId=By.id("spree_user_password");
	
	//Checkout
	public final By searchBox=By.id("search");
	public final By searchButton=By.id("search_button");
	public final By Item=By.cssSelector("a[data-id=\"94869\"]");
	public final By addcart=By.id("add-to-cart-button");
	public final By quantity=By.id("select_0_quantity");
	public final By price=By.className("final-price");
}
