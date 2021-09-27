package com.urbanladderbdd.ReusableComponents;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;

import com.urbanladderbdd.Utilities.PropertyFileReader;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.urbanladderbdd.Utilities.BrowserClass;

import io.github.bonigarcia.wdm.WebDriverManager;


@SuppressWarnings("unused")
public class BaseClass {

	public static  WebDriver driver;
	public static Properties prop;
	public static Logger log;
	public static ExtentReports report;
	public static ExtentTest rep;

	public WebDriver initializedriver() throws IOException
	{
		/*prop=new Properties();
		prop.load(PropertyFileReader.LoadFile());*/
		prop=PropertyFileReader.LoadFile();
		if(prop.getProperty("browser").equalsIgnoreCase("chrome"))
		{
			WebDriverManager.chromedriver().setup();
			driver= new ChromeDriver();
		}
		else if(prop.getProperty("browser").equalsIgnoreCase("Firefox"))
		{
			WebDriverManager.firefoxdriver().setup();
			driver= new FirefoxDriver();
		}
		driver.manage().window().maximize();
		ImplicitWait.Wait(driver);
		File logfr= new File("C:\\Users\\mylaptop\\eclipse-workspace\\Practise\\UrbanLadderBDD\\configurationFiles\\log4j.properties");
		FileInputStream fislog=new FileInputStream(logfr);
		PropertyConfigurator.configure(fislog);
		log= Logger.getLogger("Urban Ladder BDD:");
		return driver;
	}
	
	public static void OpenUrl()
	{
		driver.get(prop.getProperty("baseURL"));
	}
	
	public void getScreenshots(String result) throws IOException
	{
		File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(src, new File(".\\screenshots\\"+result+"screenshot.png"));
	}
	
}
