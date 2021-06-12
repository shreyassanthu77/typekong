import { Ctx, Query, Resolver } from "type-graphql";
import { AppContext } from "../core/context";

@Resolver()
export default class HelloResolver {
  @Query((of) => String)
  async hi(@Ctx() { db }: AppContext): Promise<string> {
    return "Hello world";
  }
}
