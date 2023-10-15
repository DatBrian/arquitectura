import { ConcreteObserver, Subject } from "./Observer";

const subject = new Subject();

const observer1 = new ConcreteObserver("Observador 1");
const observer2 = new ConcreteObserver("Observador 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Mensaje importante para todos los observadores");

subject.removeObserver(observer1);

subject.notifyObservers("Nuevo mensaje solo para observador 2");