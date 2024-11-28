export type Connection = {
  CONNECTION_STRING: string;
  DB: string;
  DBNAME: string;
};

export const connection: Connection = {
  CONNECTION_STRING: 'mongodb://localhost:27017',
  DB: 'mongodb',
  DBNAME: 'TEST',
};
