const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        ProductName: { type: String },  // Changed from "type: string"
        ProductCode: { type: String },  // Changed from "type: string"
        Img: { type: String },  // Changed from "type: string"
        UnitPrice: { type: String },  // Changed from "type: string"
        Qty: { type: String },  // Changed from "type: string"
        TotalPrice: { type: String },  // Changed from "type: string"
        CreatedDate: { type: Date, default: Date.now }
    },
    { versionKey: false },
);

const ProductsModel = mongoose.model('products', DataSchema);
module.exports = ProductsModel;
