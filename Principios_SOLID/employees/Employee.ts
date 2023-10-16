import { IEmployee } from "./interfaces/IEmployee";

class Employee implements IEmployee {
    constructor(public name: string) {}

    calculateBonus(): number {
        return 1000;
    }
}

export { Employee };
