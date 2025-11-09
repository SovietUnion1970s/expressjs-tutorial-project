import express from 'express';
import { xoaUser } from './controllers.js';
const router = express.Router();

router.delete('/users/:id', (req, res) => {
  xoaUser(req, res);
});

export default router;