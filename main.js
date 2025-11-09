import express from 'express';
import router from './route.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
export default app;