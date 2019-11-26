import { resolve } from 'path';

export default {
  config: resolve(__dirname, 'src', 'config', 'database.ts'),
  'models-path': resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
  'seeders-path': resolve(__dirname, 'src', 'database', 'seeds')
};