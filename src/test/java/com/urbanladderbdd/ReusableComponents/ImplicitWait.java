package com.urbanladderbdd.ReusableComponents;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

public class ImplicitWait {

	public static void Wait(WebDriver driver) throws IOException
	{
	
		int wait=Integer.parseInt(BaseClass.prop.getProperty("waits"));
		driver.manage().timeouts().implicitlyWait(wait, TimeUnit.SECONDS);
	}
}
