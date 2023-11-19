$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/FacebookLogin.feature");
formatter.feature({
  "name": "Account Creation On Facebook",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Account"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Creating Account On Facebook",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launch the Facebook web Application \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on the create new account button",
  "keyword": "When "
});
formatter.step({
  "name": "user gives firstName and sirName \"\u003cFirstName\u003e\" \"\u003csirname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user gives phoneNumber \"\u003cPhoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user gives Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects date of birth\"\u003cday\u003e\" \"\u003cMonth\u003e\" \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user Selects Gender \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "sirname",
        "PhoneNumber",
        "password",
        "day",
        "Month",
        "year",
        "gender"
      ]
    },
    {
      "cells": [
        "kasi",
        "karthikeyan",
        "7402709302",
        "K@si1712",
        "17",
        "12",
        "1997",
        "Male"
      ]
    },
    {
      "cells": [
        "Dhoni",
        "Singh",
        "9994824669",
        "msd71712",
        "7",
        "7",
        "1983",
        "Male"
      ]
    },
    {
      "cells": [
        "ABD",
        "Villiers",
        "9876543210",
        "abdv1718",
        "17",
        "11",
        "1985",
        "Male"
      ]
    },
    {
      "cells": [
        "virat",
        "kholi",
        "9856471230",
        "vir@kh123",
        "18",
        "9",
        "1989",
        "Male"
      ]
    },
    {
      "cells": [
        "merlin",
        "mandroe",
        "9111032000",
        "mm123456",
        "17",
        "12",
        "1980",
        "Female"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Creating Account On Facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Account"
    }
  ]
});
formatter.step({
  "name": "user launch the Facebook web Application \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.user_launch_the_Facebook_web_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create new account button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_clicks_on_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives firstName and sirName \"kasi\" \"karthikeyan\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_firstName_and_sirName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives phoneNumber \"7402709302\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_phoneNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives Password \"K@si1712\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects date of birth\"17\" \"12\" \"1997\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_selects_date_of_birth(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Selects Gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_Selects_Gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.FacebookLogin.LoginPage.verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender(LoginPage.java:139)\r\n\tat ✽.Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender(./src/test/resources/FacebookLogin.feature:13)\r\n",
  "status": "pending"
});
formatter.scenario({
  "name": "Creating Account On Facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Account"
    }
  ]
});
formatter.step({
  "name": "user launch the Facebook web Application \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.user_launch_the_Facebook_web_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create new account button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_clicks_on_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives firstName and sirName \"Dhoni\" \"Singh\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_firstName_and_sirName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives phoneNumber \"9994824669\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_phoneNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives Password \"msd71712\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects date of birth\"7\" \"7\" \"1983\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_selects_date_of_birth(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Selects Gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_Selects_Gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.FacebookLogin.LoginPage.verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender(LoginPage.java:139)\r\n\tat ✽.Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender(./src/test/resources/FacebookLogin.feature:13)\r\n",
  "status": "pending"
});
formatter.scenario({
  "name": "Creating Account On Facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Account"
    }
  ]
});
formatter.step({
  "name": "user launch the Facebook web Application \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.user_launch_the_Facebook_web_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create new account button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_clicks_on_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives firstName and sirName \"ABD\" \"Villiers\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_firstName_and_sirName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives phoneNumber \"9876543210\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_phoneNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives Password \"abdv1718\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects date of birth\"17\" \"11\" \"1985\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_selects_date_of_birth(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Selects Gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_Selects_Gender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.FacebookLogin.LoginPage.verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender(LoginPage.java:139)\r\n\tat ✽.Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender(./src/test/resources/FacebookLogin.feature:13)\r\n",
  "status": "pending"
});
formatter.scenario({
  "name": "Creating Account On Facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Account"
    }
  ]
});
formatter.step({
  "name": "user launch the Facebook web Application \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.user_launch_the_Facebook_web_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create new account button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_clicks_on_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives firstName and sirName \"virat\" \"kholi\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_firstName_and_sirName(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d119.0.6045.160)\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d688724b6105268b0c1523f00b942631, findElement {using\u003dxpath, value\u003d//input[@aria-label\u003d\u0027First name\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.160, chrome: {chromedriverVersion: 119.0.6045.105 (38c72552c5e..., userDataDir: C:\\Users\\KASI\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56619}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56619/devtoo..., se:cdpVersion: 119.0.6045.160, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d688724b6105268b0c1523f00b942631\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:199)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:132)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.FacebookLogin.LoginPage.user_gives_firstName_and_sirName(LoginPage.java:48)\r\n\tat ✽.user gives firstName and sirName \"virat\" \"kholi\"(./src/test/resources/FacebookLogin.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user gives phoneNumber \"9856471230\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_phoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gives Password \"vir@kh123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects date of birth\"18\" \"9\" \"1989\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_selects_date_of_birth(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects Gender \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_Selects_Gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Creating Account On Facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Account"
    }
  ]
});
formatter.step({
  "name": "user launch the Facebook web Application \"https://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.user_launch_the_Facebook_web_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create new account button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_clicks_on_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gives firstName and sirName \"merlin\" \"mandroe\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_firstName_and_sirName(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d119.0.6045.160)\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [881cc73fc65e1b53a371998b6f8efbf0, findElement {using\u003dxpath, value\u003d//input[@aria-label\u003d\u0027First name\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 119.0.6045.160, chrome: {chromedriverVersion: 119.0.6045.105 (38c72552c5e..., userDataDir: C:\\Users\\KASI\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56656}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56656/devtoo..., se:cdpVersion: 119.0.6045.160, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 881cc73fc65e1b53a371998b6f8efbf0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:199)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:132)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.FacebookLogin.LoginPage.user_gives_firstName_and_sirName(LoginPage.java:48)\r\n\tat ✽.user gives firstName and sirName \"merlin\" \"mandroe\"(./src/test/resources/FacebookLogin.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user gives phoneNumber \"9111032000\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_phoneNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gives Password \"mm123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_gives_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects date of birth\"17\" \"12\" \"1980\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_selects_date_of_birth(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user Selects Gender \"Female\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_Selects_Gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verify_firstName_and_sirName_phoneNumber_phoneNumber_date_of_birth_Gender()"
});
formatter.result({
  "status": "skipped"
});
});