import "reflect-metadata";
import createServer from "./core/server";
import { ApolloServer } from "apollo-server-koa";
import { buildSchema } from "type-graphql";
import HelloResolver from "./resolvers/hello.resolver";
import { createConnection } from "typeorm";
import createContext from "./core/context";

(async function () {
  const [path, port] = ["/gql", 8000];
  const app = createServer();
  const db = await createConnection();
  const context = createContext({ db });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    context,
  });

  apolloServer.applyMiddleware({ app, path });

  app.listen(port, () => {
    console.log(
      "🚀 server running on 👉 http://localhost:" + port + path + " 🚀"
    );
  });
})();
