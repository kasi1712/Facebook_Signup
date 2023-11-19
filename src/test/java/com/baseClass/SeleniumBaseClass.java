package com.baseClass;

import java.io.File;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SeleniumBaseClass implements InterfaceBaseClass {

	public static WebDriver driver;
	public static Actions act;
	public static Alert ar ;
	public static Select st;
	
	
	
	public void browserLaunch(String url) {
		 WebDriverManager.chromedriver().setup();
	     driver = new ChromeDriver();
	     driver.get(url);
	     driver.manage().window().maximize();
	     
		
	}

	public void ClickAction(WebElement e) {
	e.click();
		
	}

	@Override
	public void getValues(WebElement e, String text) {
		e.sendKeys(text);
		
	}

	@Override
	public void getTextFromElement(WebElement e, String text) {
		e.sendKeys(text);
		
	}

	@Override
	public void getAttributeValue(WebElement e, String text) {
		e.getAttribute(text);
		
	}

	@Override
	public void MoveElement(WebElement e) {
		act.moveToElement(e).perform();
		
	}

	@Override
	public void DragDrop(WebElement f, WebElement g) {
		act.dragAndDrop(f, g);
		
	}

	@Override
	public void DoubleClick(WebElement e) {
		act.doubleClick(e);
		
	}

	@Override
	public void RightClick(WebElement e) {
		act.contextClick(e);
		
	}

	@Override
	public void getTextFromElement(WebElement e, String text, int i) {
		act.sendKeys(e, text);
		
	}



	@Override
	public void ToAccept() {
		ar.accept();
		
	}

	@Override
	public void ToDismiss() {
		ar.dismiss();
		
	}

	@Override
	public void getTextFromElement(String text, float j) {
		ar.sendKeys(text);
		
	}

	@Override
	public void getTextAlert() {
		ar.getText();
		
	}

	@Override
	public void ClickScreenShot() {
		// TODO Auto-generated method stub
		
	}
	
	public void frameSwitch(String value) {
		driver.switchTo().frame(value);
	}



	@Override
	public void SwitctToParent(String id) {
		driver.switchTo().parentFrame();
		
	}

	@Override
	public void switchToFirst() {
		driver.switchTo().defaultContent();
		
	}
	
	public static void Screenshot(String f2) throws Throwable {
		TakesScreenshot tk = (TakesScreenshot)driver;
		File src =tk.getScreenshotAs(OutputType.FILE);
		File desc = new File("C:\\Users\\KASI\\Pictures\\Screenshots\\url\\" +f2+ ".png");
		FileUtils.copyFile(src, desc);
	}
	
	public String getTextDropdown(WebElement st) {
		return st.getText();
	}
	
	public List<WebElement> getOptionDropDown(WebElement e) {
		Select s =new Select(e);
		return s.getOptions();
	  
	}



}



	


