# KZEN

#### Video Demo: <URL HERE>

## KZEN: Revolutionizing Goal Setting and Tracking

#### Description:

In today's fast-paced world, setting and achieving goals is more crucial than ever. Whether it's personal development, team objectives, or organizational targets, having a structured approach to goal management can significantly enhance productivity and success. Enter Kzen, a cutting-edge platform designed to transform how individuals and teams set, track, and achieve their goals.

#### Database

Database is a PostgreSQL database with Hasura GraphQL engine. The setup is easy and fast. just run docker compose up in the database folder.
then apply migrations and seed the database with the following commands:

```
cd database
docker compose up -d
hasura console
hasura migrate apply
hasura metadata apply
hasura metadata reload
```

Hasura is really powerful and gives to a frontend developer the ability to create a GraphQL API with a simple configuration.
Now you don't need to be a senior backend developer to create a GraphQL API.

hasura documentation can be found here: https://hasura.io/docs/latest/graphql/core/index/

#### Backend

Backend is a Node.js app with Express.js build with typescript. The setup is easy and fast. Just run next commands

```
cd backend
yarn install
yarn watch
```

Also you can use docker compose to run the backend. Just run `docker compose up -d` in the backend folder. It is comfortable for users that are integrated only in frontend development.

Remember! to set up .env configuration. It contains sensitive information, that's why it's not provided in the repository.

Backend consists of 3 main services:

1. Auth service - responsible for user authentication and authorization.
2. Goals service - responsible for goals management.
3. Images service - responsible for images management.

Services are under kzen -> routes

Nodejs documentation can be found here: https://nodejs.org/en/docs/
Expressjs documentation can be found here: https://expressjs.com/en/4x/api.html

#### Frontend

Frontend is a React app with Vite. The setup is easy and fast. Just run next commands

```
cd frontend
yarn install
yarn dev
```

Frontend should be run after database and backend are running.

Remember! to set up .env.local configuration. It contains sensitive information, that's why it's not provided in the repository.

Frontend has a lot of modules and features, describing each file fill take a lot of time. But in short:

1. User authentication - login, registration, forgot password, reset password.
    - Google authentication is also implemented.
2. Dashboard module - responsible for dashboard display and data.
3. Goals module - responsible for goals management.
    - Goals module uses infinite scroll to load data. It is a modern and powerful feature.
4. Profile module - responsible for profile management. Here user can change his name, email, password and avatar.
5. Goals slides module - responsible for goals slides management.
6. Notepad module - responsible for real time notes management. It saves your note automatically.
    - Integrated rich text editor will help you to write your notes more beautiful and easy.
7. Theming feature - responsible for changing the app theme.
8. Mobile Responsive Design - the app is mobile responsive.
9. Unit tests - to test possibilities of the app.
10. GraphQL Code Generator - to generate types and hooks for the app.
11. tanstack query - to fetch, cache, synchronize and update server state.
12. genql from vercel/gql-tada - to write queries in a declarative way (testing these two libs finally decided that gql-tada is much more powerful and flexible in development process).

The full version of the project is under my continuous development at the moment. It has more functionality and can be visited by the link: https://kzen.cloud.

cs50 course helped me to improve my skills in programming and to be a better developer. It also helped me to understand more about computer science and software engineering. This is so helpful for me!!!

#### Conclusion

During development were used a lot of modern technologies and approaches. It was a great experience to work with them. The main focus was to make a full stack app that will have a extendable architecture, built on react and node.js. Typescript is a great tool for avoiding errors and making the code more robust.


