import 'dotenv/config';
import { exec } from 'child_process';
import path from 'path';

const mongoExpressPath = path.join(process.cwd(), 'node_modules', '.bin', 'mongo-express.cmd');
exec(`"${mongoExpressPath}" --url "${process.env.DATABASE_URL}" --basicAuth false`, { stdio: 'inherit' });