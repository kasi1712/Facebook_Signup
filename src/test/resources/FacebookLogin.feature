@Account
Feature: Account Creation On Facebook


Scenario Outline: Creating Account On Facebook
Given user launch the Facebook web Application "https://www.facebook.com/"
When user clicks on the create new account button
And user gives firstName and sirName "<FirstName>" "<sirname>"
And user gives phoneNumber "<PhoneNumber>"
And user gives Password "<password>"
And user selects date of birth"<day>" "<Month>" "<year>"
And user Selects Gender "<gender>"
Then Verify firstName and sirName,  phoneNumber, phoneNumber, date of birth, Gender  

Examples: 
|FirstName|sirname|PhoneNumber|password|day|Month|year|gender|
|kasi|karthikeyan|7402709302|K@si1712|17|12|1997|Male|
|Dhoni|Singh|9994824669|msd71712|7|7|1983|Male|
|ABD|Villiers|9876543210|abdv1718|17|11|1985|Male|
|virat|kholi|9856471230|vir@kh123|18|9|1989|Male|
|merlin|mandroe|9111032000|mm123456|17|12|1980|Female|
 