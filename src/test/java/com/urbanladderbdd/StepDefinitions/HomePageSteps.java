package com.urbanladderbdd.StepDefinitions;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.urbanladderbdd.PageObjects.HomePage;
import com.urbanladderbdd.ReusableComponents.BaseClass;
import com.urbanladderbdd.ReusableComponents.ImplicitWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@SuppressWarnings("unused")
public class HomePageSteps extends BaseClass {

	public WebDriver driver;
	public HomePage hp;
	public Logger log;
	public ExtentReports report;
	public ExtentTest rep;
	//1
	@Given("^User Launch Browser$")
	public void user_Launch_Browser() throws IOException {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//log.info("Initializing Driver");
		driver=initializedriver();
		ImplicitWait.Wait(driver);
	    //throw new PendingException();
	}

	@When("^User opens the URL \"([^\"]*)\"$")
	public void user_opens_the_URL(String arg1) {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//log.info("Initializing URL");
		OpenUrl();
		hp.ClosingPopUp();
	    //throw new PendingException();
	}

	@When("^Click the Cart icon$")
	public void click_the_Cart_icon() {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//rep=report.createTest("Scenario 1");
		//rep.info("Initiated");
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		//log.info("Initializing Cart Page");
		hp.getCartPage();
	    //throw new PendingException();
	}

	@Then("^Count the number of links in Cart page$")
	public void count_the_number_of_links_in_Cart_page() {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//log.info("Initializing Count of links avialable");
		int count=driver.findElements(By.tagName("a")).size();
		System.out.println("No of links in Cart Page:- "+count);
	    //throw new PendingException();
	}
	//1f
	//2
	@When("^Clicks the Gift Cards icon$")
	public void clicks_the_Gift_Cards_icon() {
	    // Write code here that turns the phrase above into concrete actions
	    hp=new HomePage(driver);
	    //rep=report.createTest("Scenario 2");
		//rep.info("Initiated");
	    //log.info("Initializing Gift Cards page");
	    hp.getGiftCards();
	}

	@Then("^Check whether Digital Cards present or not$")
	public void check_whether_Digital_Cards_present_or_not() {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//log.info("Initializing Validation");
		hp.getDigitalcards();
		//log.info("Validation Success");
	}

	@When("^Enters his requirement$")
	public void enters_his_requirement() {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//rep=report.createTest("Scenario 3");
		//rep.info("Initiated");
		hp.getSearch();
		//log.info("Search Page Opened");
		//log.info("Success");
	}
	//4
	@When("^User clicks BedRooms$")
	public void user_clicks_Beds() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//rep=report.createTest("Scenario 4");
		//rep.info("Initiated");
		Thread.sleep(4000);
		hp.getBRoom();
		//log.info("BedRooms page opened");
	    //throw new PendingException();
	}

	@When("^User clicks King Size Beds$")
	public void user_clicks_King_Size_Beds() {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		try {
			Thread.sleep(4000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		hp.getBRItem();
		//log.info("King Size beds is selected");
	    //throw new PendingException();
	}

	@When("^User selects$")
	public void user_selects() {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//log.info("Filtering options");
		hp.getSelectType();
	    //throw new PendingException();
	}

	@Then("^New Arrivals page is opened$")
	public void new_Arrivals_page_is_opened() {
	    // Write code here that turns the phrase above into concrete actions
		hp=new HomePage(driver);
		//log.info("New Arrivals is being clicked");
		hp.getNArrivals();
		//log.info("New Arrivals opened");
	    //throw new PendingException();
		//log.info("Success");
	}
	@When("^User clicks Sale$")
	public void user_clicks_sale() {
		hp=new HomePage(driver);
		rep=report.createTest("Scenario 5");
		rep.info("Initiated");
		hp.getSale();
		log.info("Sale is Hovered");
	}
	@When("^User clicks Beds$")
	public void user_clicks_beds() {
		hp=new HomePage(driver);
		hp.getBedsSection();
		//log.info("Beds is selected");
	}
	@When("^User clicks on Pavis Storage Bed$")
	public void user_clicks_on_pavis_storage_bed() {
		hp=new HomePage(driver);
		hp.getPavisBed();
		//log.info("Pavis Storage bed is opened");
	}
	@Then("^Pavis Storage Bed window is opened$")
	public void pavis_storage_bed_window_is_opened() {
		hp=new HomePage(driver);
		hp.getPavisWindowHandle();
		//log.info("Switched to Pavis Bed Page");
		//log.info("Success");
	}
	@When("^Open chatbox frame$")
    public void open_chatbox_frame() throws Throwable {
		hp=new HomePage(driver);
		//rep=report.createTest("Scenario 6");
		//rep.info("Initiated");
		Thread.sleep(5000);
		//log.info("ChatBox frame is opened");
		Thread.sleep(5000);
    }
    @Then("^Send message \"([^\"]*)\" to Customer care$")
    public void send_message_something_to_customer_care(String msg) throws Throwable {
    	hp=new HomePage(driver);
    	hp.ChatFrame().click();
		Thread.sleep(5000);
		hp.ChatBot().click();
		hp.ChattBox().sendKeys(msg);
		hp.ChattBox().sendKeys(Keys.ENTER);
		driver.switchTo().defaultContent();
		//log.info("Started chat with the customer care Executive");
		//log.info("Failed");
        
    }
	@When("^Enter item name \"([^\"]*)\"$")
    public void enter_item_name_something(String item) throws Throwable {
    	hp= new HomePage(driver);
    	//rep=report.createTest("Scenario 7");
		//rep.info("Initiated");
		hp.ClosingPopUp();
		Thread.sleep(5000);
		hp.getSearchChairs();
    }

    @Then("^Get Instock count and Outofstock count$")
    public void get_instock_count_and_outofstock_count() throws Throwable {
    	hp= new HomePage(driver);
    	String totalcount=hp.GetProductsCount().getText();
		System.out.println("Total items count : "+totalcount);
		hp.GetCheckBox().click();
		Thread.sleep(5000);
		if(hp.GetCheckBox().isSelected())
		{
			System.out.println("Check box selected");
			String InstockCount=hp.GetProductsCount().getText();
			System.out.println("Items Instock Count : "+InstockCount);
			//log.info("To print the instock and outof stock count");
		}
		//log.info("Success");
    }
    
    @When("^Enter (.+) and (.+)$")
    public void enter_and(String orderid, String phonenum) throws Throwable {
    	hp=new HomePage(driver);
    	//rep=report.createTest("Scenario 8 with 2 Test Cases");
		//rep.info("Initiated");
		hp.ClosingPopUp();
		Thread.sleep(5000);
		hp.TrackOrder().click();
		hp.Orderid().sendKeys(orderid);
		hp.PhoneNumber().sendKeys(phonenum);
		//log.info("Checking wheather the given order id and phone number matches data base");
		//log.info("Success");
    }
    @When("^User selects Help$")
    public void user_selects_help() {
    	hp=new HomePage(driver);
    	//rep=report.createTest("Scenario 10");
		//rep.info("Initiated");
    	try {
			Thread.sleep(4000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
    	hp.getHelpPage();
    	//log.info("Help Page Opened");
    }
    @When("^User selects Contact us and Validate title$")
    public void user_selects_contact_us() {
    	hp=new HomePage(driver);
    	hp.getContactUs();
    	try {
			Thread.sleep(4000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
    	String title=driver.getTitle();
    	System.out.println(title);
    	//log.info("Success");
    	//Assert.assertEquals(title, "Contact Us - Urban Ladder");
    }
    
}
