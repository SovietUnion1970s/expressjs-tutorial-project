import express from 'express';
import { xoaUser , getUser } from './controllers.js';
const router = express.Router();

router.delete('/users/:id', (req, res) => {
  xoaUser(req, res);
});
router.get('/users/:id', (req, res) => {
  getUser(req, res);
});

export default router;