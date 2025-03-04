import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';
import testRoute from './routes/test.route.js';

const app = express();

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}));
app.use(express.json()); // Utilizado para que a aplicação possa enviar conteúdo como JSON
app.use(cookieParser());


app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);

app.listen(8800, () => {
    console.log('Server is running!');
})