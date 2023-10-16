import { IEmployee } from "./IEmployee";

interface IEmployeeStorage {
    saveEmployee(employee: IEmployee): void;
    getEmployee(name: string): IEmployee | undefined;
}

export { IEmployeeStorage };
