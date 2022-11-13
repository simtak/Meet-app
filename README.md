#Readme

Some functionalities of the app

1:Expandable Event Carts:
As a User
I should be able to expand and collapse events 
So that I can see further details about an event if I am interested.

Given user hasn't clicked on any event, all event infos are collapsed
When a user clicks on an event
Then the event expands and shows more information for the user to see

2: Changing default number of events shown on screen:
As a User
I should be able to specify the number of events I want to see
So that I can change the events I am viewing to more or less than the default view. 

Given user has specified a specific number of events he would like to see
When he opens the application in the browser
Then he will see the number of events like specified

3: Offline Usage:
As a User
I should be able to see cached data even when I am offline, and should see an error if I try to change some data offline.
So that I can even view some events offline. 

Given I am using the application offline
When I open the app
Then I should see all cached events still listed

4:Future Events:
As a User
I should be able to see a chart with upcoming events in each city
So that I can plan ahead for future events.

Given I am opening the app
when I see the main screen
Then I should see a chart with upcomming events for each city
