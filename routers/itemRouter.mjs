import express from 'express'
import { createItem, deleteItem, getData, updateItem } from '../controllers/itemController.mjs';

let router = express.Router();

router.get('/',getData);
router.post('/',createItem);
router.put('/:id',updateItem);
router.delete('/:id',deleteItem);

export default router;