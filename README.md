# BACKEND
back end for the wedding planner app.

# Endpoints to register, login, and get info

| Endpoint | Description |
| --- | --- |
| '/' | Displays a short welcome message just to make sure things work |
| '/register | register a new user with { username: xxx, password: xxx } ID auto assigned. |
| '/login' | login with { username: xxx, password: xxx } and you'll get a welcome message and token |
| '/test' | displays a list of registered users IF login and auth token are present in headers |

# Once logged in and you've pushed the jwt to headers as 'Authorization'

| Endpoint | Description |
| --- | --- |
| '/events' | fetches a list of events, returning an array of objects. (No auth needed for this one, but required for others) |
| '/addevent' | Add event in following format (all fields required):{"eventname": xxx, "date": xxx, "description": xxx, "location": xxx, "theme": xxx, "vendors": xxx} |

| '/deleteevent/:id' | Deletes the event with the ID number sent |
| '/updateevent/:id' | Updates the event with the ID number sent, and new body object with ALL fields required from '/addevent' |


#Final Test
Final test passed 5/30/2019.
-All endpoints are working.
-Jest tests passing once .env removed from equation (see notes in dbConfig.js)

# Heroku does... things
Heroku does go to 'sleep' when not in use, so first request of any kind will be delayed by several seconds. Afterwards should be fine.

