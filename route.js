import express from 'express';
import multer from 'multer';
import upload from './configs/multer.js';
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
router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send(`File ${req.file.originalname} has been uploaded.`);
});
export default router;