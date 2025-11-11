import express from 'express';
import { xoaUser , getUser, testMiddleware } from './controllers.js';
const router = express.Router();

router.delete('/users/:id', (req, res) => {
  xoaUser(req, res);
});
router.get('/users/:id', (req, res) => {
  getUser(req, res);
});
router.get('/test', (req, res) => {
  testMiddleware(req, res);
});
export default router;