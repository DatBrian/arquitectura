class Microkernel {
    private modules: Map<string, any> = new Map();

    loadModule(name: string, module: any) {
        this.modules.set(name, module);
    }

    execute(moduleName: string, methodName: string, ...args: any[]) {
        if (this.modules.has(moduleName)) {
            const module = this.modules.get(moduleName);
            if (module[methodName]) {
                return module[methodName](...args);
            } else {
                throw new Error(
                    `Method ${methodName} not found in module ${moduleName}`
                );
            }
        } else {
            throw new Error(`Module ${moduleName} not found`);
        }
    }
}

const kernel = new Microkernel();
export default kernel;
