Feature: Urban Ladder BDD Framework

Scenario: Click on Cart Icon
Given User Launch Browser
When User opens the URL "https://www.urbanladder.com"
And Click the Cart icon
Then Count the number of links in Cart page

Scenario: Click on Gift Cards Icon
Given User Launch Browser
When User opens the URL "https://www.urbanladder.com"
And Clicks the Gift Cards icon
Then Check whether Digital Cards present or not

Scenario: Searching an Item
Given User Launch Browser
When User opens the URL "https://www.urbanladder.com"
And Enters his requirement

Scenario: Finding out New Arrivals in King Size Beds
Given User Launch Browser
When User opens the URL "https://www.urbanladder.com"
When User clicks BedRooms
When User clicks King Size Beds
When User selects
Then New Arrivals page is opened

Scenario: Finding out Pavis Bed and Details
Given User Launch Browser
When User opens the URL "https://www.urbanladder.com"
When User clicks Sale
When User clicks Beds
When User clicks on Pavis Storage Bed
Then Pavis Storage Bed window is opened

Scenario: Chat with customer care
Given User Launch Browser 
When User opens the URL "https://www.urbanladder.com"
When Open chatbox frame
Then Send message "Hello" to Customer care

Scenario: To check How many items out of stock
Given User Launch Browser 
When User opens the URL "https://www.urbanladder.com"
When Enter item name "Chairs"
Then Get Instock count and Outofstock count

Scenario Outline: Delivering cities in all State
Given User Launch Browser 
When User opens the URL "https://www.urbanladder.com"
When Enter <Orderid> and <Phonenum>

Examples:
|orderid|phonenum|
|2025695|7894456695|
|2025712|7854595525|

Scenario: Contact Us from Help Page
Given User Launch Browser 
When User opens the URL "https://www.urbanladder.com"
When User selects Help
When User selects Contact us and Validate title

