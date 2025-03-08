import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';
import testRoute from './routes/test.route.js';
import userRoute from './routes/user.route.js';
import chatRoute from './routes/chat.route.js';
import messageRoute from './routes/message.route.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Utilizado para que a aplicação possa enviar conteúdo como JSON
app.use(cookieParser());


app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
    console.log('Server is running!');
})