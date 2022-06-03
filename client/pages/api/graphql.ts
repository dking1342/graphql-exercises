import { createServer } from "@graphql-yoga/node";
import { NextApiRequest, NextApiResponse } from "next";
import { resolvers } from "../../src/resolvers";
import { typeDefs } from "../../src/schema";

const server = createServer<{ req: NextApiRequest; res: NextApiResponse }>({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: "/api/graphql",
  // graphiql: false // uncomment to disable GraphiQL
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await server(req, res);
  await server.start();
}
