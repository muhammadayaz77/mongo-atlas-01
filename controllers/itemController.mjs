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

export const updateItem = async (req,res) => {
    let updatedItem = await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updatedItem);
}

export const deleteItem = async (req,res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).end();
}