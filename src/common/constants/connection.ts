export type Connection = {
  CONNECTION_STRING: string;
  DB: string;
  DBNAME: string;
};

export const connection: Connection = {
  CONNECTION_STRING: 'postgres://postgres:postgres@localhost:5432',
  DB: 'postgres',
  DBNAME: 'TEST',
};
