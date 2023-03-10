import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../../interfaces';

const productSchema = new Schema(
	{
		description: { type: String, required: true },
		images: [{ type: String }],
		inStock: { type: Number, required: true, default: 0 },
		price: { type: String, required: true, default: 0 },
		sizes: [
			{
				type: String,
				enum: {
					values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
					message: '{VALUE} cette taille est invalide ',
				},
			},
		],
		slug: { type: String, required: true, unique: true },
		tags: [{ type: String }],
		title: { type: String, required: true },
		type: {
			type: String,
			enum: {
				values: ['shirts', 'pants', 'hoodies', 'hats'],
				message: '{VALUE} cette article est invalide ',
			},
		},
		gender: {
			type: String,
			enum: {
				values: ['men', 'women', 'kid', 'unisex'],
				message: "{VALUE} ce genre n'est pas encore créé ",
			},
		},
	},
	{
		timestamps: true,
	}
);

productSchema.index({ title: 'text', tags: 'text' });

const Product: Model<IProduct> =
	mongoose.models.Product || model('Product', productSchema);

export default Product;
