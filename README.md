<h1 align="center"> Los principios SOLID</h1>

<img src="images\banner.png" width="100%" height="500">

## Contenidos:

1. [Introducción](#introducción)
2. [Ventajas](#ventajas)
3. [Recomendaciones al momento de aplicar estos principios](#recomendaciones-al-momento-de-aplicar-estos-principios)
4. [Explicación detallada de cada principio](#explicación-detallada-de-cada-principio)
    - 4.1 [Principio de responsabilidad única (SRP)](#principio-de-responsabilidad-única-srp)
    - 4.2 [Principio de código abierto/cerrado (OCP)](#principio-de-código-abiertocerrado-ocp)
    - 4.3 [Principio de sustitución de Liskov (LSP)](#principio-de-sustitución-de-liskov-lsp)
    - 4.4 [Principio de segregación de interfaces (ISP)](#principio-de-segregación-de-interfaces-isp)
    - 4.5 [Principio de inversión de dependencias (DIP)](#principio-de-inversión-de-dependencias-dip)
5. [Ejemplificación](#ejemplificación)


## Introducción

Los principios SOLID son un conjunto de cinco principios de diseño de clases de programación orientada a objetos (POO). Fueron introducidos por Robert C. Martin a principios de la década de 2000 y son ampliamente aceptados como buenas prácticas para el desarrollo de software de alta calidad.

Los principios SOLID son:

- **Single Responsibility Principle (SRP):** Cada clase debe tener una responsabilidad única.

- **Open-Closed Principle (OCP):** Las clases deben ser abiertas para su extensión, pero cerradas para su modificación.

- **Liskov Substitution Principle (LSP):** Las clases derivadas deben ser sustituibles por sus clases base sin afectar al comportamiento del programa.

- **Interface Segregation Principle (ISP):** Las interfaces deben estar diseñadas para ser utilizadas por los clientes que las necesitan.

- **Dependency Inversion Principle (DIP):** Las dependencias deben ser de alto nivel a bajo nivel.

## Ventajas

Los principios SOLID son importantes porque ayudan a crear código que sea:

- **Mantenible:** El código que sigue los principios SOLID es más fácil de entender y modificar, lo que lo hace más mantenible.

- **Extensible:** El código que sigue los principios SOLID es más fácil de extender con nuevas funcionalidades.

- **Resistente a los cambios:** El código que sigue los principios SOLID es más resistente a los cambios, ya que no está acoplado a detalles específicos.

- **Código más fácil de modificar:** El código que sigue los principios SOLID es más fácil de modificar porque las clases están abiertas para su extensión pero cerradas para su modificación.

- **Código más fácil de entender:** El código que sigue los principios SOLID es más fácil de entender porque cada clase tiene una sola responsabilidad y las interfaces están bien diseñadas.

## Recomendaciones al momento de aplicar estos principios

Para aplicar los principios SOLID, se recomienda seguir las siguientes recomendaciones:

- ***Empieza con un diseño sencillo***. No intentes diseñar una solución perfecta desde el principio. Comienza con un diseño sencillo y luego ve añadiendo complejidad a medida que sea necesario.

- ***Utiliza interfaces y clases abstractas***. Las interfaces y las clases abstractas son una herramienta importante para aplicar los principios SOLID.

- ***Refactoriza tu código regularmente***. A medida que vayas aprendiendo más sobre tu código, refactorízalo para que siga los principios SOLID.


## Explicación detallada de cada principio

A continuación se proporciona una descripción y explicación detallada acerca de cada uno de los principios para asegurar su entendimiento:

### Principio de responsabilidad única (SRP)

El principio de responsabilidad única (SRP) establece que cada clase debe tener una sola responsabilidad. Esto significa que una clase debe ser responsable de un solo aspecto del dominio del problema que se está modelando.

Un ejemplo de violación del SRP sería una clase que se encarga de almacenar datos, realizar cálculos y mostrar resultados. Esta clase tiene tres responsabilidades distintas, lo que puede dificultar su mantenimiento y su extensión.

Para aplicar el SRP, podemos dividir una clase en varias clases más pequeñas, cada una de las cuales se encargará de una sola responsabilidad.

### Principio de código abierto/cerrado (OCP)

El principio de código abierto/cerrado (OCP) establece que las clases deben ser abiertas para su extensión, pero cerradas para su modificación. Esto significa que las clases deben ser diseñadas para que sea posible añadir nuevas funcionalidades sin modificar el código existente.

Un ejemplo de violación del OCP sería una clase que se encarga de calcular el impuesto sobre la renta. Si se introduce un nuevo tipo de impuesto, será necesario modificar el código de la clase para incluir el nuevo cálculo.

Para aplicar el OCP, podemos utilizar interfaces o clases abstractas. Las interfaces definen un conjunto de métodos que deben ser implementados por las clases concretas. Esto permite añadir nuevas clases que implementan la interfaz sin modificar el código de las clases existentes.

### Principio de sustitución de Liskov (LSP)

El principio de sustitución de Liskov (LSP) establece que una clase derivada debe ser sustituible por su clase base sin afectar al comportamiento del programa. Esto significa que un objeto de la clase derivada debe ser capaz de desempeñar el mismo papel que un objeto de la clase base.

Un ejemplo de violación del LSP sería una clase Coche que herede de una clase Vehículo. La clase Coche añade un nuevo método llamado acelerar(). Si se llama a este método a un objeto de la clase Vehículo, se producirá un error.

Para aplicar el LSP, debemos asegurarnos de que las clases derivadas no rompan la funcionalidad de las clases base. Esto se puede hacer mediante la definición de interfaces o clases abstractas que definan el comportamiento común a todas las clases.

### Principio de segregación de interfaces (ISP)

El principio de segregación de interfaces (ISP) establece que las interfaces deben estar diseñadas para ser utilizadas por los clientes que las necesitan. Esto significa que una interface no debe definir métodos que no sean necesarios para todos los clientes.

Un ejemplo de violación del ISP sería una interface Animal que defina un método hacerRuido(). Este método no es necesario para todos los animales, por ejemplo, para los peces.

Para aplicar el ISP, debemos dividir las interfaces en varias interfaces más pequeñas, cada una de las cuales se encargará de un conjunto de métodos relacionados.

### Principio de inversión de dependencias (DIP)

El principio de inversión de dependencias (DIP) establece que las dependencias deben ser de alto nivel a bajo nivel. Esto significa que las clases de alto nivel no deben depender de clases de bajo nivel.

Un ejemplo de violación del DIP sería una clase Controlador que dependa de una clase Modelo. Si se modifica el modelo, será necesario modificar el controlador.

Para aplicar el DIP, debemos utilizar interfaces o clases abstractas para definir las dependencias. Esto permite que las clases de alto nivel dependan de interfaces o clases abstractas, que no cambian tan a menudo como las clases concretas.


## Ejemplificación

Si quieres ver un ejemplo práctico puedes ver en la carpeta [Principios_SOLID](Principios_SOLID) donde encontrarás de forma explícita la aplicación de cada principio explicado a lo largo del documento. si tienes ya un entendimiento básico en la programación podrás notar como se secciona el código en este estilo de arquitectura.

Explicación de cómo se aplican los principios SOLID:

- **Principio de Responsabilidad Única (SRP):** Cada clase tiene una única responsabilidad. Por ejemplo, Employee se encarga de representar a un empleado y calcular bonificaciones, mientras que EmployeeStorage administra el almacenamiento de empleados y EmailNotifier se ocupa de notificar a los empleados.

- **Principio de Abierto/Cerrado (OCP):** Si necesitas extender el sistema para notificar a los empleados de otras formas, puedes hacerlo sin modificar las clases existentes. Esto cumple con el OCP, ya que la funcionalidad es abierta para la extensión pero cerrada para la modificación.

- **Principio de Sustitución de Liskov (LSP):** La clase Employee implementa la interfaz IEmployee, lo que garantiza que puede ser sustituida por cualquier subtipo de IEmployee sin cambiar la funcionalidad del programa.

- **Principio de Segregación de la Interfaz (ISP):** Las interfaces se han diseñado para ser cohesivas y específicas. Por ejemplo, IEmployee contiene solo los métodos relacionados con los empleados, y otras interfaces como IEmployeeStorage son igualmente específicas.

- **Principio de Inversión de Dependencia (DIP):** El EmployeeProcessor depende de abstracciones (interfaces) en lugar de detalles concretos. Se inyectan dependencias, como IEmployeeStorage, BonusCalculator, EmailNotifier, y Logger, en lugar de crear instancias directas.

Este proyecto muestra cómo se aplican los principios SOLID para crear un sistema extensible, mantenible y cohesivo en TypeScript. Cada principio aborda áreas específicas de la calidad del código, lo que conduce a un software de alta calidad y facilita la gestión y expansión del sistema.


---
Última actualización ***16/10/2023*** por [@DatBrian](https://github.com/DatBrian)