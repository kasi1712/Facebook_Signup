package com.baseClass;

import org.openqa.selenium.WebElement;

public interface InterfaceBaseClass {
	
	public void browserLaunch(String url);
	public void ClickAction(WebElement e);
	public void getValues(WebElement e , String text);
	public void getTextFromElement(WebElement e, String text);
	public void getAttributeValue(WebElement e, String text);
	public void MoveElement(WebElement e);
	public void DragDrop(WebElement f, WebElement g);
	public void DoubleClick(WebElement e);
	public void RightClick(WebElement e);
	public void getTextFromElement(WebElement e , String text, int i);
	public void ToAccept();
	public void ToDismiss();
	public void getTextFromElement(String text, float j);
	public void getTextAlert();
	public void ClickScreenShot();
	public void frameSwitch(String value);
	public void SwitctToParent(String id);
	public void switchToFirst();
	
	
	

}

