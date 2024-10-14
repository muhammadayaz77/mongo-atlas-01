import express from 'express'
import { createItem, getData } from '../controllers/itemController.mjs';

let router = express.Router();

router.get('/',getData);
router.get('/',createItem);

export default router;