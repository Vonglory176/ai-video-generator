import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
//   out: './drizzle',
  schema: './src/app/configs/schema.js', // './configs/schema.js', // 
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
});