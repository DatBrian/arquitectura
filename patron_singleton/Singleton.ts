class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {
    // Constructor privado para evitar la creación directa de instancias.
  }

  static getInstance(): Singleton {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  someBusinessLogic() {
    // Método de ejemplo
    console.log("Ejecutando lógica de negocio en la instancia Singleton.");
  }
}

export default Singleton;