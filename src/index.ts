import app from './app';
import { connectDB } from './config/db';
import { PORT } from './config/env';

async function main() {
    await connectDB();
    app.listen(PORT);
    console.log('server started on port', PORT);
}

main();