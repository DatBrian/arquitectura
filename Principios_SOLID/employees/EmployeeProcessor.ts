import { IEmployee } from "./interfaces/IEmployee";
import { IEmployeeStorage } from "./interfaces/IEmployeeStorage";
import { BonusCalculator } from "../bonuses/BonusCalculator";
import { EmailNotifier } from "../notifications/EmailNotifier";
import { Logger } from "../logs/Logger";
import { EmployeeStorage } from "./employeeStorage";

class EmployeeProcessor {
    constructor(
        private notifier: EmailNotifier,
        private storage: IEmployeeStorage = new EmployeeStorage(),
        private bonusCalculator: BonusCalculator = new BonusCalculator(),
        private logger: Logger = new Logger()
    ) {}

    processEmployee(name: string): void {
        const employee = this.storage.getEmployee(name);

        if (employee) {
            const bonus = this.bonusCalculator.calculateBonus(employee);
            this.notifier.sendBonusNotification(employee, bonus);
        } else {
            this.logger.log(`Employee ${name} not found.`);
        }
    }
}

export { EmployeeProcessor };
