// Definición de la interfaz del observador
interface Observer {
    update(message: string): void;
}

// Clase concreta del observador
class ConcreteObserver implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`${this.name} recibió el mensaje: ${message}`);
    }
}

// Clase sujeto (observable)
class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(message: string): void {
        this.observers.forEach((observer) => observer.update(message));
    }
}

export { Observer, ConcreteObserver, Subject };
