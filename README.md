<h1 align="center"> Patrones de diseño</h1>

<img src="images\banner2.png" width="100%" height="500">

## Contenidos:

1. [Definición](#definición)
2. [Algunos ejemplos de patrones de diseño](#algunos-ejemplos-de-patrones-de-diseño)
    - 2.1 [Patrón de diseño Singleton](#singleton)
        - 2.1.1 [Objetivo](#objetivo)
        - 2.1.2 [Implementación](#implementación)
        - 2.1.3 [Ventajas](#ventajas)
        - 2.1.4 [Desventajas](#desventajas)
        - 2.1.5 [¿Cuando debo usar Singleton?](#¿cuando-debo-usar-singleton)
        - 2.1.6 [Algunos casos donde se podría usar Singleton](#algunos-casos-donde-se-podría-usar-singleton)
        - 2.1.7 [Ejemplificación](#ejemplificación)
    - 2.2 [Patrón de diseño Observer](#patrón-de-diseño-observer)
        - 2.2.1 [Componentes](#componentes)
        - 2.2.2 [Uso y Funcionamiento](#uso-y-funcionamiento)
        - 2.2.3 [Ventajas](#ventajas)
        - 2.2.4 [Desventajas](#desventajas-1)
        - 2.2.4 [Ejemplificación](#ejemplificacic3b3n-1)


## Definición

Los patrones de diseño son soluciones comprobadas a problemas de diseño comunes en el desarrollo de software. Se centran en el diseño de componentes individuales y la forma en que interactúan entre sí.

## Algunos ejemplos de patrones de diseño

### Singleton

El patrón de diseño singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

#### Objetivo

El objetivo del patrón singleton es garantizar que una clase sólo tenga una instancia y proporcionar un punto de acceso global a ella. Esto puede ser útil en una variedad de situaciones, como:

- Cuando se necesita un objeto que sea compartido por toda la aplicación. Por ejemplo, un objeto de base de datos o un objeto que se utiliza para almacenar la configuración de la aplicación.

- Cuando se necesita un objeto que sea creado solo una vez, como un temporizador global o un objeto que se utiliza para realizar una tarea de inicialización.

- Cuando se necesita un objeto que sea seguro para el acceso concurrente, como un objeto que se utiliza para almacenar datos compartidos.

#### Implementación

La implementación básica del patrón singleton consiste en:

- Declarar el constructor de la clase como privado, lo que impide que otros objetos puedan crear instancias de la clase.

- Declarar un campo de instancia estático que almacenará la única instancia de la clase.

- Declarar un método estático que devolverá la única instancia de la clase.

#### Ventajas

El patrón singleton tiene las siguientes ventajas:

- Garantiza que una clase sólo tenga una instancia.

- Proporciona un punto de acceso global a la única instancia.

- Puede ser útil en una variedad de situaciones.

#### Desventajas

El patrón singleton tiene las siguientes desventajas:

- Puede ser difícil de implementar correctamente.

- Puede violar el principio de responsabilidad única (SRP).

- Puede dificultar la prueba de la aplicación.

#### ¿Cuando debo usar Singleton?

El patrón singleton se debe utilizar cuando se necesita una clase que tenga una única instancia. Esto puede ser útil en una variedad de situaciones, como las siguientes:

- Cuando se necesita un objeto que sea compartido por toda la aplicación.

- Cuando se necesita un objeto que sea creado solo una vez.

- Cuando se necesita un objeto que sea seguro para el acceso concurrente.

#### Algunos casos donde se podría usar Singleton

El patrón singleton se utiliza en una variedad de aplicaciones, como:

- Aplicaciones web: el singleton se puede utilizar para almacenar la configuración de la aplicación, como la dirección del servidor de base de datos o la lista de usuarios registrados.

- Aplicaciones de escritorio: el singleton se puede utilizar para almacenar la configuración del usuario, como la ubicación de los archivos de datos o la lista de marcadores.

- Aplicaciones móviles: el singleton se puede utilizar para almacenar la instancia de la base de datos o el cliente de red.

#### Ejemplificación

Si quieres ver un ejemplo práctico puedes ver en la carpeta [patron_singleton](patron_singleton) donde encontrarás de forma explícita la implementación que se explican al inicio [Singleton](#singleton), si tienes ya un entendimiento básico en la programación podrás notar como se secciona el código en este patrón de diseño.

Este ejemplo crea dos instancias del Singleton y comprueba si son iguales, lo que debería dar como resultado true. Luego, ejecuta el método someBusinessLogic() en una de las instancias.

Utiliza el patrón Singleton para garantizar que solo haya una instancia de la clase Singleton en toda la aplicación. Esto es útil en situaciones en las que deseas tener un punto de acceso global a una única instancia, como la gestión de configuraciones o la conexión a una base de datos.


### Patrón de diseño observer

El patrón de diseño Observer es un patrón de comportamiento que define una dependencia de uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.

#### Componentes

El patrón Observer tiene dos componentes principales:

- Sujeto: El sujeto es el objeto que cambia su estado. El sujeto mantiene una lista de observadores que están interesados en sus cambios de estado.

- Observador: El observador es el objeto que se interesa en los cambios de estado del sujeto. El observador implementa un método de notificación que se llama cuando el sujeto cambia su estado.

#### Uso y Funcionamiento

Este patrón se usa para implementar la comunicación entre objetos de manera que los cambios en el estado de un objeto se propaguen a otros objetos que estén interesados en estos cambios.

El funcionamiento del patrón Observer es sencillo. El sujeto mantiene una lista de observadores. Cuando el sujeto cambia su estado, llama al método de notificación de todos los observadores en su lista.

#### Ventajas

El patrón Observer tiene las siguientes ventajas:

- Desacopla los objetos: El sujeto no tiene que conocer a sus observadores. Los observadores se suscriben y se dan de baja del sujeto de forma independiente.

- Es escalable: El sujeto puede tener un número arbitrario de observadores.

- Es flexible: El sujeto puede notificar a los observadores de cualquier cambio en su estado.

#### Desventajas

El patrón Observer tiene las siguientes desventajas:

- Puede ser costoso: Si el sujeto tiene muchos observadores, puede ser costoso notificar a todos ellos de cada cambio de estado.

- Puede ser difícil de depurar: Si el sujeto tiene muchos observadores, puede ser difícil depurar un problema que se produce en uno de ellos.

#### Ejemplificación

Si quieres ver un ejemplo práctico puedes ver en la carpeta [patron_observer](patron_observer) donde encontrarás de forma explícita la implementación que se explican al inicio [Patron de disseño Observer](#patrón-de-diseño-observer), si tienes ya un entendimiento básico en la programación podrás notar como se secciona el código en este patrón de diseño.

En este ejemplo, creamos una instancia de Subject y dos observadores, observer1 y observer2. Luego, agregamos los observadores al sujeto y notificamos a todos los observadores con un mensaje.

El resultado debería mostrar cómo los observadores reciben y responden a los mensajes emitidos por el sujeto. El patrón Observer es útil cuando deseas implementar notificaciones y actualizaciones en objetos sin acoplarlos de manera rígida.

---
Última actualización ***15/10/2023*** por [@DatBrian](https://github.com/DatBrian)