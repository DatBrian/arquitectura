import eventEmitter from "../events/eventEmitter";
import Product from "./product";

class Cart {
    private items: Map<number, Product[]> = new Map();

    constructor() {
        eventEmitter.on(
            "productAddedToCart",
            (userId: number, product: Product) => {
                this.addToCart(userId, product);
            }
        );
    }

    addToCart(userId: number, product: Product) {
        if (!this.items.has(userId)) {
            this.items.set(userId, []);
        }

        this.items.get(userId)!.push(product);
        console.log(`Added product ${product} to user ${userId}'s cart`);
    }

    getCart(userId: number): Product[] | undefined {
        return this.items.get(userId);
    }
}

export default Cart;
