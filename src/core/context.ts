import { Connection, EntityManager } from "typeorm";

export type AppContext = {
  db: EntityManager;
};

export default function createContext({ db }: { db: Connection }) {
  return (): AppContext => {
    return {
      db: db.manager,
    };
  };
}
