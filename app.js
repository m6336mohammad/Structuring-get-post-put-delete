import 'dotenv/config';
import express  from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import homeRouter from './routes/home-route.js';
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json()); //body parser
app.use(express.urlencoded({ extended: true })); //middleware for parsing bodies from URL
app.use(helmet());
app.use(morgan('tiny'));

app.use('/',homeRouter);

app.listen(port ,()=>{
  console.log(`server run on port: ${port}`);
})