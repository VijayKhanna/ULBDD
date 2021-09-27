package com.urbanladderbdd.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features =".//features/ULHome.feature",
		glue="com.urbanladderbdd.StepDefinitions",
		plugin= {"pretty","html:test-output"}
		)
public class HomePageRunner {
	
}
