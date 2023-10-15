import Singleton from "./Singleton";

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("Comparando instancias:", singleton1 === singleton2); // Debería imprimir true

singleton1.someBusinessLogic();