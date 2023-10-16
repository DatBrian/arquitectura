import { Logger } from "../logs/Logger";
import { IEmployee } from "../employees/interfaces/IEmployee";

class EmailNotifier {
    constructor(private logger: Logger) {}

    sendBonusNotification(employee: IEmployee, bonus: number): void {
        const message = `Congratulations, ${employee.name}! You received a bonus of $${bonus}.`;
        this.logger.log(message);
    }
}

export { EmailNotifier };
