package com.FacebookLogin;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".\\src\\test\\resources",
					glue= "com.FacebookLogin",
					tags = "@Account",
					plugin = "html:target/html",
					monochrome = true,
					dryRun = false)


public class JRunner {
	

}








