import { IEmployee } from "./interfaces/IEmployee";
import { IEmployeeStorage } from "./interfaces/IEmployeeStorage";

class EmployeeStorage implements IEmployeeStorage {
    private employees: Record<string, IEmployee> = {};

    saveEmployee(employee: IEmployee): void {
        this.employees[employee.name] = employee;
    }

    getEmployee(name: string): IEmployee | undefined {
        return this.employees[name];
    }
}

export { EmployeeStorage };
