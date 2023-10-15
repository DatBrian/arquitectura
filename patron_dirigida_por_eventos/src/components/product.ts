import eventEmitter from "../events/eventEmitter";

class Product {
    constructor(private name: string, private price: number) {}

    addToCart(userId: number) {
        console.log(`Adding product ${this.name} to cart for user ${userId}`);
        eventEmitter.emit("productAddedToCart", userId, this);
    }
}

export default Product;
