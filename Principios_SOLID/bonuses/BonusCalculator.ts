import { IEmployee } from "../employees/interfaces/IEmployee";

class BonusCalculator {
    calculateBonus(employee: IEmployee): number {
        return employee.calculateBonus();
    }
}

export { BonusCalculator };
