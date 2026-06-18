import 'express-async-errors';
import express from 'express';
import env from "env";
import routes from 'routes';
import handleError from 'middleware/errorHandle';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleError);

app.get("/hi", (resquest, response) => {
    response.status(200).json({
        hello: "world"
    });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3001 🚀`);
});
