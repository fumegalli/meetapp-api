interface DefineConfig {
    timestamps: boolean;
    underscored: boolean;
    underscoredAll: boolean;
}

interface DatabaseConfig {
    dialect: string;
    host: string;
    username: string;
    password: string;
    database: string;
    define: DefineConfig;
}

export const databaseConfig: DatabaseConfig = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
