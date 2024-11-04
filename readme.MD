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

#### Backend

Backend is a Node.js app with Express.js. The setup is easy and fast. Just run next commands

```
cd backend
yarn install
yarn watch
```

Remember! to set up .env configuration. It contains sensitive information, that's why it's not provided in the repository.

Backend consists of 3 services:

1. Auth service - responsible for user authentication and authorization.
2. Goals service - responsible for goals management.
3. Images service - responsible for images management.

#### Frontend

Frontend is a React app with Vite. The setup is easy and fast. Just run next commands

```
cd frontend
yarn install
yarn dev
```

Remember! to set up .env.local configuration. It contains sensitive information, that's why it's not provided in the repository.

Frontend has a lot of modules and features, describing each file fill take a lot of time. But in short:

1. User authentication - login, registration, forgot password, reset password.
    - Google authentication is also implemented.
2. Dashboard module - responsible for dashboard display and data.
3. Goals module - responsible for goals management.
    - Goals module uses infinite scroll to load data. It is a modern and powerful feature.
4. Profile module - responsible for profile management.
5. Goals slides module - responsible for goals slides management.
6. Theming feature - responsible for changing the app theme.
7. Mobile Responsive Design - the app is mobile responsive.
8. Unit tests - to test possibilities of the app.
9. GraphQL Code Generator - to generate types and hooks for the app.
10. tanstack query - to fetch, cache, synchronize and update server state.
11. genql from vercel - to write queries in a declarative way.

The original project is under my continuous development. It has more functionality and can be visited by the link: https://kzen.cloud.

cs50 course helped me to improve my skills in programming and to be a better developer. It also helped me to understand more about the web development and add more complex features to the app.