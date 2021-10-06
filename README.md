# Cypress Testing Workshop Overview

Welcome to the Cypress Testing Workshop.

To begin open a terminal window and run the following command 
to spin up a PostgreSQL database running in Docker

`docker compose up -d`

You should now have a postgres db running called cypressworkshop

DB Name:     `cypressworkshop`  
DB Username: `cypress`  
DB Password: `cypress`

### Starting the backend 
navigate to root folder (cypress) <- You start here 

enter command
`./gradlew bootrun`

Your backend api should successfully be running on port `8080`
### Starting the frontend folder 
navigate to the client folder  

enter command
`yarn`

enter command
`yarn start`

Your frontend should successfully be running on port `3000`


## Workshop Topics

- ### Folder Structure*

- ### Commands

- ### Selectors

- ### Stubs & Spies

- ### Custom Commands

- ### Retry-ability*  


***Denotes talking points only (No Exercises)**


# Workshop Exercises 

#### Exercise 1

Exercise 1 - Commands  can be found
`e2e/cypress/integration/workshop/commands.spec.ts`  

Exercise 2 - Selectors  can be found
`e2e/cypress/integration/workshop/selectors.spec.ts`  

Exercise 3 - Stubs & Spies can be found
`e2e/cypress/integration/workshop/stubsAndSpies.spec.ts`  

Exercise 4 - Custom Commands can be found
`e2e/cypress/integration/workshop/customCommands.spec.ts`


