import Item from '../models/Item.mjs'

export let getData = async(req,res) => {
    const items = await Item.find();
    res.json(items)
}
export const createItem = async (req, res) => {
    const { name, description, quantity } = req.body;
    const newItem = new Item({ name, description, quantity });
    await newItem.save();
    res.status(201).json(newItem);
};