import { EmployeeProcessor } from "./employees/EmployeeProcessor";
import { EmailNotifier } from "./notifications/EmailNotifier";
import { Logger } from "./logs/Logger";

const logger = new Logger();
const emailNotifier = new EmailNotifier(logger);
const processor = new EmployeeProcessor(emailNotifier);

processor.processEmployee("John");
