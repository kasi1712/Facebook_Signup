package com.FacebookLogin;

import java.io.File;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.baseClass.InterfaceBaseClass;
import com.baseClass.SeleniumBaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginPage extends SeleniumBaseClass {

	SeleniumBaseClass sb =new SeleniumBaseClass();
	

	
	@Given("user launch the Facebook web Application {string}")
	public void user_launch_the_Facebook_web_Application(String url) throws Throwable {
		 sb.browserLaunch(url);
	     Screenshot("f1");
	     
	   
	}

	@When("user clicks on the create new account button")
	public void user_clicks_on_the_create_new_account_button() throws Throwable {
	   WebElement NewAct=driver.findElement(By.xpath("//a[text()='Create new account']"));
	   ClickAction(NewAct);
	   Screenshot("f2");
	   Thread.sleep(4000);
	   
	}

	@When("user gives firstName and sirName {string} {string}")
	public void user_gives_firstName_and_sirName(String fname, String sname) throws Throwable {
		WebElement FirstName = driver.findElement(By.xpath("//input[@aria-label='First name']"));
		getValues(FirstName, fname);
		Screenshot("f3");
		WebElement SirName = driver.findElement(By.xpath("//input[@aria-label='Surname']"));
		getValues(SirName, sname);
		Thread.sleep(2000);
		Screenshot("f4");
		
																				
	}

	@When("user gives phoneNumber {string}")
	public void user_gives_phoneNumber(String phNo) throws Throwable {
		WebElement contact = driver.findElement(By.xpath("//input[@aria-label='Mobile number or email address']"));
		getValues(contact, phNo);
		Screenshot("f5");
		
	}

	@When("user gives Password {string}")
	public void user_gives_Password(String pass) {
		WebElement pword = driver.findElement(By.xpath("//input[@aria-label='Surname']//following::input[@type='password']"));
		getValues(pword, pass);
	}


		@When("user selects date of birth{string} {string} {string}")
		public void user_selects_date_of_birth(String day1, String month1, String year1) throws Throwable {
			WebElement day =driver.findElement(By.xpath("//select[@id='day']"));
			//ClickAction(day);
//			Select s = new Select(day);
			
			List<WebElement> options = sb.getOptionDropDown(day);
			for(WebElement x : options) {
				String dayOb = sb.getTextDropdown(x);
				if(dayOb.equals(day1)) {
					driver.findElement(By.xpath("//option[text()='31']//preceding::option[@value='"+dayOb+"']")).click();
					Screenshot("f6");
		}
			}
			
			Thread.sleep(2000);
			WebElement month =driver.findElement(By.xpath("//select[@id='month']"));
			//month.click();
//			Select m = new Select(month);
			
			List<WebElement> options1 = sb.getOptionDropDown(month);
			for(WebElement y : options1) {
				String MonOb= y.getAttribute("value");
				if(MonOb.equals(month1)) {
					driver.findElement(By.xpath("//option[@value='31']//following::option[@value='"+month1+"']")).click();
					Screenshot("f7");
		}
			}
			Thread.sleep(2000);
			
			WebElement year =driver.findElement(By.xpath("//select[@aria-label='Year']"));
			//year.click();
			Thread.sleep(2000);
//			Select s2 = new Select(year);
			
			
			List<WebElement> options2 = sb.getOptionDropDown(year);
			for(WebElement z : options2) {
				String yearOb=sb.getTextDropdown(z);
				
				if(yearOb.equals(year1)) {
					WebElement yearsel= driver.findElement(By.xpath("//option[text()='Dec']//following::option[@value='"+year1+"']"));
					ClickAction(yearsel);
					Screenshot("f8");
		}
			}
			Thread.sleep(2000);
	
		
		
	}
		@When("user Selects Gender {string}")
		public void user_Selects_Gender(String gender) throws Throwable {
			WebElement gen=driver.findElement(By.xpath("//label[text()='"+gender+"']"));
			ClickAction(gen);
			Screenshot("f9");
			
			WebElement enter = driver.findElement(By.xpath("//input[@type='hidden']//preceding::button[text()='Sign Up']"));
			ClickAction(enter);
			Screenshot("f10");
		}

	@Then("Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender")
	public void verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}


}
