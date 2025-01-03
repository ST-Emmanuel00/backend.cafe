import { db } from "../../common/config/index.js";

export const getAllProducts = async () => {
    try {

        const products = await db.product.findMany(
            {
                orderBy: {
                    createdAt: 'desc'
                }
            }
        )

        return {
            message: 'Get all products jeje',
            data: { count: products.length, products }
        }

    } catch (error) {
        throw error
    }
};