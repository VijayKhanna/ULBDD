$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./features/ULHome.feature");
formatter.feature({
  "line": 1,
  "name": "Urban Ladder BDD Framework",
  "description": "",
  "id": "urban-ladder-bdd-framework",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Click on Cart Icon",
  "description": "",
  "id": "urban-ladder-bdd-framework;click-on-cart-icon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click the Cart icon",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Count the number of links in Cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 7458239600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 12303999400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.click_the_Cart_icon()"
});
formatter.result({
  "duration": 3525388200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.count_the_number_of_links_in_Cart_page()"
});
formatter.result({
  "duration": 165767600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Click on Gift Cards Icon",
  "description": "",
  "id": "urban-ladder-bdd-framework;click-on-gift-cards-icon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Clicks the Gift Cards icon",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Check whether Digital Cards present or not",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 2818196000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 13742253300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clicks_the_Gift_Cards_icon()"
});
formatter.result({
  "duration": 3311862200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.check_whether_Digital_Cards_present_or_not()"
});
formatter.result({
  "duration": 658896600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Searching an Item",
  "description": "",
  "id": "urban-ladder-bdd-framework;searching-an-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enters his requirement",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 2833298700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 18246010300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.enters_his_requirement()"
});
formatter.result({
  "duration": 2935813600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Finding out New Arrivals in King Size Beds",
  "description": "",
  "id": "urban-ladder-bdd-framework;finding-out-new-arrivals-in-king-size-beds",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User clicks BedRooms",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User clicks King Size Beds",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User selects",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "New Arrivals page is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 3743877200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 13722836100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_Beds()"
});
formatter.result({
  "duration": 4203273700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_King_Size_Beds()"
});
formatter.result({
  "duration": 6899350900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_selects()"
});
formatter.result({
  "duration": 1284496600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.new_Arrivals_page_is_opened()"
});
formatter.result({
  "duration": 310827600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Finding out Pavis Bed and Details",
  "description": "",
  "id": "urban-ladder-bdd-framework;finding-out-pavis-bed-and-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks Sale",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User clicks Beds",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User clicks on Pavis Storage Bed",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Pavis Storage Bed window is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 3174530900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 14715503400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_sale()"
});
formatter.result({
  "duration": 6856300,
  "error_message": "java.lang.NullPointerException\r\n\tat com.urbanladderbdd.StepDefinitions.HomePageSteps.user_clicks_sale(HomePageSteps.java:156)\r\n\tat ✽.When User clicks Sale(./features/ULHome.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_beds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_clicks_on_pavis_storage_bed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.pavis_storage_bed_window_is_opened()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Chat with customer care",
  "description": "",
  "id": "urban-ladder-bdd-framework;chat-with-customer-care",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Open chatbox frame",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Send message \"Hello\" to Customer care",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 3640125200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 15393270000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.open_chatbox_frame()"
});
formatter.result({
  "duration": 10007395700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.send_message_something_to_customer_care(String)"
});
formatter.result({
  "duration": 10169492000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".icon\\-ic_chat_icon\"}\n  (Session info: chrome\u003d93.0.4577.82)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2QOB21C\u0027, ip: \u0027192.168.55.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.82, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\mylaptop\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50999}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 821b076f2601ea4b46bcbce2418f4bd9\n*** Element info: {Using\u003dclass name, value\u003dicon-ic_chat_icon}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.urbanladderbdd.PageObjects.HomePage.ChatFrame(HomePage.java:79)\r\n\tat com.urbanladderbdd.StepDefinitions.HomePageSteps.send_message_something_to_customer_care(HomePageSteps.java:192)\r\n\tat ✽.Then Send message \"Hello\" to Customer care(./features/ULHome.feature:40)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 42,
  "name": "To check How many items out of stock",
  "description": "",
  "id": "urban-ladder-bdd-framework;to-check-how-many-items-out-of-stock",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Enter item name \"Chairs\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Get Instock count and Outofstock count",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 2735731000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 14357344600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chairs",
      "offset": 17
    }
  ],
  "location": "HomePageSteps.enter_item_name_something(String)"
});
formatter.result({
  "duration": 8193122300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.get_instock_count_and_outofstock_count()"
});
formatter.result({
  "duration": 7771794100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.urbanladderbdd.StepDefinitions.HomePageSteps.get_instock_count_and_outofstock_count(HomePageSteps.java:224)\r\n\tat ✽.Then Get Instock count and Outofstock count(./features/ULHome.feature:46)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Delivering cities in all State",
  "description": "",
  "id": "urban-ladder-bdd-framework;delivering-cities-in-all-state",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Enter \u003cOrderid\u003e and \u003cPhonenum\u003e",
  "keyword": "When "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "urban-ladder-bdd-framework;delivering-cities-in-all-state;",
  "rows": [
    {
      "cells": [
        "orderid",
        "phonenum"
      ],
      "line": 54,
      "id": "urban-ladder-bdd-framework;delivering-cities-in-all-state;;1"
    },
    {
      "cells": [
        "2025695",
        "7894456695"
      ],
      "line": 55,
      "id": "urban-ladder-bdd-framework;delivering-cities-in-all-state;;2"
    },
    {
      "cells": [
        "2025712",
        "7854595525"
      ],
      "line": 56,
      "id": "urban-ladder-bdd-framework;delivering-cities-in-all-state;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 55,
  "name": "Delivering cities in all State",
  "description": "",
  "id": "urban-ladder-bdd-framework;delivering-cities-in-all-state;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Enter \u003cOrderid\u003e and \u003cPhonenum\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 3609988600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 13477301700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cOrderid\u003e",
      "offset": 6
    },
    {
      "val": "\u003cPhonenum\u003e",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.enter_and(String,String)"
});
formatter.result({
  "duration": 16086350800,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Delivering cities in all State",
  "description": "",
  "id": "urban-ladder-bdd-framework;delivering-cities-in-all-state;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 49,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Enter \u003cOrderid\u003e and \u003cPhonenum\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 5581395600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 15534476200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cOrderid\u003e",
      "offset": 6
    },
    {
      "val": "\u003cPhonenum\u003e",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.enter_and(String,String)"
});
formatter.result({
  "duration": 16345863800,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Contact Us from Help Page",
  "description": "",
  "id": "urban-ladder-bdd-framework;contact-us-from-help-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "User Launch Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "User opens the URL \"https://www.urbanladder.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User selects Help",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User selects Contact us and Validate title",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.user_Launch_Browser()"
});
formatter.result({
  "duration": 6167354300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.urbanladder.com",
      "offset": 20
    }
  ],
  "location": "HomePageSteps.user_opens_the_URL(String)"
});
formatter.result({
  "duration": 18128880200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_selects_help()"
});
formatter.result({
  "duration": 1232981000,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"inherit contact-channel\" href\u003d\"/help\"\u003e...\u003c/a\u003e is not clickable at point (308, 20). Other element would receive the click: \u003cdiv class\u003d\"center\" style\u003d\"text-align: center; color: #000;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d93.0.4577.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2QOB21C\u0027, ip: \u0027192.168.55.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.82, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\mylaptop\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54895}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5c769fdd7a88b488fcac4ecb3a1ffdb0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.urbanladderbdd.PageObjects.HomePage.getHelpPage(HomePage.java:120)\r\n\tat com.urbanladderbdd.StepDefinitions.HomePageSteps.user_selects_help(HomePageSteps.java:247)\r\n\tat ✽.When User selects Help(./features/ULHome.feature:61)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.user_selects_contact_us()"
});
formatter.result({
  "status": "skipped"
});
});