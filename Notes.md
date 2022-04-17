# Tasks

## 1. Bugs found 
| Number | Title                                   | Description                                                                                                                                                             | Steps                                                                                                                                                                                                                                                                                                               | Expected                          | Actual                                                          |
|--------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-----------------------------------------------------------------|
| 1      | Timer does not reset when it is started | When a user begins the timer and then resets, the time does not go back to zero.                                                                                        | 1. Go to http://localhost:3000/ 2. Select the Start button 3. Select the Reset button                                                                                                                                                                                                                               | Timer does reset back to 00:00:00 | Timer does not reset back to 00:00:00                           |
| 2      | User is redirected to Error page        | When a user begins the timer, enters a space into the New Session field, selects stop and saves the session they are redirected to an error page                        | 1. Go to http://localhost:3000/ 2. Select the Start button 3. Left mouse-click into New Session field 4. Select the space bar button 5. Select the Stop button 6. Select the Save button                                                                                                                            | Successful message appears        | TypeError: Cannot read properties of undefined (reading 'then') |
| 3      | User is redirected to Error page        | When a user begins the timer, enters a space into the New Session field, selects reset and saves the session they are redirected to an error page                       | 1. Go to http://localhost:3000/ 2. Select the Start button 3. Left mouse-click into New Session field 4. Select the space bar button 5. Select the Reset button 6. Select the Save button                                                                                                                           | Successful message appears        | TypeError: Cannot read properties of undefined (reading 'then') |
| 4      | User is redirected to Error page        | When a user begins the timer, enters text into the New Session field, selects stop and saves the session they are redirected to an error page                           | 1. Go to http://localhost:3000/ 2. Select the Start button 3. Left mouse-click into New Session field 4. Enter text 5. Select the Stop button 6. Select the Save button                                                                                                                                             | Successful message appears        | TypeError: Cannot read properties of undefined (reading 'then') |
| 5      | User is redirected to Error page        | When a user begins the timer, enters text into the New Session field, selects reset and saves the session they are redirected to an error page                          | 1. Go to http://localhost:3000/ 2. Select the Start button 3. Left mouse-click into New Session field 4. Enter text 5. Select the Reset button 6. Select the Save button                                                                                                                                            | Successful message appears        | TypeError: Cannot read properties of undefined (reading 'then') |
| 6      | User is redirected to Error page        | When a user enters text into the New Session field, begins the timer, selects stop and saves the session they are redirected to an error page after selecting ok popup  | 1. Go to http://localhost:3000/ 2. Left mouse-click into New Session field 3. Enter text 4. Select the Start button 5. Select the Stop button 6. Select the Save button 7. Select OK on popup “Your session has been saved! Please view your sessions by clicking on the ‘View Saved Sessions’ button on the left”  | Successful message appears        | TypeError: Cannot read properties of undefined (reading 'then') |
| 7      | User is redirected to Error page        | When a user enters text into the New Session field, begins the timer, selects reset and saves the session they are redirected to an error page after selecting ok popup | 1. Go to http://localhost:3000/ 2. Left mouse-click into New Session field 3. Enter text 4. Select the Start button 5. Select the Reset button 6. Select the Save button 7. Select OK on popup “Your session has been saved! Please view your sessions by clicking on the ‘View Saved Sessions’ button on the left” | Successful message appears        | TypeError: Cannot read properties of undefined (reading 'then') |

## 2. Define and document the acceptance criteria and testing strategy 

**User story 1**: As a user, I want to be able to edit an existing session name so that I will be able to update it with a new name.

Scenario: Editing an existing session name

Given there is an existing session on the View Saved Sessions page
And the session contains a valid name 
When the user updates the session name
Then the new session name is displayed

**User story 2**: As a user, I want to be able to edit an existing session duration so that I will be able to update it with a new time duration.

Scenario: Editing an existing session duration

Given there is an existing session on the View Saved Sessions page
And the session contains a valid duration
When the user updates the session duration
Then the new session duration is displayed

**User story 3**: As a user, I want to be able to delete an existing session so that I will be able to remove it from the View Saved Sessions page

Scenario: Deleting an existing session

Given there is an existing session on the View Saved Sessions page
When the user deletes the session
Then the session is not displayed

**User story 4**: As a user, I want to be able to search for a specific session so that I will be able to find the session I am looking for on the View Saved Sessions page

Scenario: Searching for an known session by name

Given there is an existing known session on the View Saved Sessions page
And the session name is unique
When the user searches by this unique session name
Then the specific session is displayed

**User story 5**: As a user, I want to be able to search for a specific session so that I will be able to find the session I am looking for on the View Saved Sessions page

Scenario: Searching for an known session by duration

Given there is an existing known session on the View Saved Sessions page
And the session duration is unique
When the user searches by this unique session duration
Then the specific session is displayed


The test strategy is to start off with valid test cases then invalid test cases

| Scenarios                                                  | Test Cases                                                                    |
|------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Scenario 1: Editing an existing session name**           | Update an existing session name to one that differs alphanumeric value        |
|                                                            | Update an existing session name back to original name                         |
|                                                            | Update an existing session name to an empty field                             |
|                                                            | Update two existing session names to same name alphanumeric value             |
|                                                            |                                                                               |
| **Scenario 2: Editing an existing session duration**       | Update an existing session duration to one that differs numeric value only    |
|                                                            | Update an existing session duration back to original duration                 |
|                                                            | Update an existing session duration to an empty field                         |
|                                                            | Update two existing session durations to same duration numeric values         |
|                                                            | Update an existing session duration with text only                            |
|                                                            |                                                                               |
| **Scenario 3: Deleting an existing session**               | Remove a specific session from a list of sessions                             |
|                                                            | Remove a specific session only one in list                                    |
|                                                            | Remove multiple sessions                                                      |
|                                                            |                                                                               |
| **Scenario 4: Searching for an known session by name**     | Find by name an existing session                                              |
|                                                            | Find by name a session that does not exist                                    |
|                                                            | Find by name more than one existing session with same session name full match |
|                                                            | Find by name more than one existing session with similar names partial match  |
|                                                            |                                                                               |
| **Scenario 5: Searching for an known session by duration** | Find by duration an existing session                                          |
|                                                            | Find by duration a session that does not exist                                |
|                                                            | Find by duration more than one existing session with same duration full match |
|                                                            | Find by duration more than one existing session with partial match            |


## 3. End-to-end Automation Tests
Based on bugs found above in the following file `timetracker-bugs.spec.js` 

Located here `root` -> `cypress_automation` -> `cypress` -> `integration`

## 4. API Automation Tests
File `api.spec.js` 

Located here `root` -> `cypress_automation` -> `cypress` -> `integration`

## 5. Reporting 
Reports are automatically generated after tests are run
`root` -> `cypress_automation` -> `cypress` -> `reports`

Screenshots are automatically generated after test are run
`root` -> `cypress_automation` -> `cypress` -> `screenshots`

Videos are automatically generated after test are run
`root` -> `cypress_automation` -> `cypress` -> `videos`

## 6. Github actions
`main.yml` file 

Located here `root` -> `github/workflows`

## 7. Non-functional tests
### What is Accessibility?
The practice of making a product that is usable by everyone, with or without a disability.
This will enable more users who are able to use your product
Accessibility issues can cause a loss of users which in turn loss of money to the business which is why it’s a serious issue that needs to be addressed.

- Accessibility test with cypress-axe
- Test how accessible the time tracker app is.

File `accessibility.spec.js`

Located here `root` -> `cypress_automation` -> `cypress` -> `integration`

## 8. Executing all the automation test
To execute all of the automation tests enter the following command in your vscode terminal
`npm run test`
