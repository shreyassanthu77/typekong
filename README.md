# TypeKONG 
## TypeScript Koa TypeORM NodeJs TypeGraphql server

 ## scaffolding the project

```bash
npx degit shreyassanthu77/typekong my-app
```

 ## Steps to run this project:


1. Run `npm i` or `yarn` command
1. Upgrade the dependencies if needed
1. Setup database settings inside `ormconfig.json` file 
1. Run `npm run start:dev` or `yarn start:dev` command to start development server
1. Ignore the errors wait for server running message
1. visiit `http://localhost:8000/gql` for graphql playground


 ## Info

 - ### put all your database entities in `src/models` folder
 - ### put all your resolvers in `src/resolvers` folder
 - ### edit the app context in `src/core/context.ts` file