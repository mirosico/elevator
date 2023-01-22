import app from './core/app';
import { connectToDatabase } from './database';

const PORT = process.env.PORT || 3000;

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
