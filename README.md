<h1 align="center"> Estilos Arquitectónicos </h1>

<img src="images\Estilos_banner.png" width="100%" height="500">

## Contenidos:

- [Definición](#definición)
- [Ejemplos de estilos arquitectónicos](#algunos-ejemplos-de-estilos-arquitectónicos)
    - [Estilo de arquitectura en capas](#estilo-de-arquitectura-en-capas)
        - [Ventajas de la arquitectura en capas](#ventajas)
        - [Ejemplo de arquitectura en capas](#ejemplificación)
    - [Estilo de arquitectura de microservicios](#desarrollo-de-microservicios)
        - [Ventajas y desventajas de la arquitectura de microservicios](#ventajas-1)
        - [Desarrollo de microservicios](#desarrollo-de-microservicios)
        - [Ejemplo de arquitectura de microservicios](#ejemplificacic3b3n-1)

## Definición

Los estilos arquitectónicos son esquemas de organización estructural general para sistemas de software. Describen cómo se combinan los componentes de un sistema, como subsistemas, módulos y componentes individuales. Los estilos arquitectónicos no proporcionan soluciones específicas a problemas de diseño, sino que proporcionan un marco general para pensar en la arquitectura de un sistema.


## Algunos ejemplos de estilos arquitectónicos

### **Estilo de arquitectura en capas**

El estilo de arquitectura en capas es un enfoque de diseño de software en el que se divide una aplicación en capas lógicas que separan las diferentes responsabilidades y funcionalidades. Cada capa se encarga de un conjunto de tareas específicas y se comunica con los niveles adyacentes mediante interfaces bien definidas.

En la arquitectura por capas se suele separar la aplicación en 3 pilares:

- **capa de presentación:** Es la capa que interactúa con el usuario. Se encarga de mostrar la interfaz gráfica de usuario (GUI) y procesar las entradas del usuario.

- **capa de lógica de negocio:** Es la capa que implementa las reglas de negocio de la aplicación. Se encarga de procesar los datos y generar los resultados.

- **capa de datos:** Es la capa que almacena los datos de la aplicación. Se encarga de acceder a los datos y proporcionarlos a la capa de lógica de negocio.

#### Ventajas

- Modularidad: Las capas se pueden desarrollar y probar de forma independiente, lo que facilita el mantenimiento y la evolución de la aplicación.

- Escalabilidad: Las capas se pueden distribuir en diferentes servidores, lo que permite escalar la aplicación según sea necesario.

- Seguridad: Cada capa puede protegerse de las demás, lo que ayuda a mejorar la seguridad de la aplicación.

#### Ejemplificación

Si quieres ver un ejemplo práctico puedes ver en la carpeta [estilo_en_capas](estilo_en_capas) donde encontrarás de forma explícita las 3 capas que se explican en la primera parte de este punto [Estilo de arquitectura en capas](#estilo-de-arquitectura-en-capas), si tienes ya un entendimiento básico en la programación podrás notar como se secciona el código en este estilo de arquitectura.

Este ejemplo utiliza TypeScript, Express.js y una estructura en capas típica para gestionar libros. La capa de presentación maneja las rutas y las solicitudes HTTP, la capa de lógica de negocio contiene los servicios y modelos de datos, y la capa de acceso a datos se encarga de almacenar y recuperar libros. Por supuesto, en una aplicación real, las capas serían más complejas y tendrían más funcionalidades, pero este ejemplo proporciona una base para comprender el estilo arquitectónico en capas.


### **Estilo de arquitectura de microservicios**

La arquitectura de microservicios es un estilo de arquitectura de software que consiste en descomponer una aplicación en un conjunto de servicios pequeños, autónomos e independientes. Cada servicio implementa una funcionalidad específica de negocio y se comunica con otros servicios a través de mecanismos ligeros.

#### Características

Los microservicios se caracterizan por las siguientes propiedades:

- Autonomía: Cada microservicio es un componente independiente que implementa una funcionalidad específica.

- Independencia: Los microservicios están acoplados de forma imprecisa, lo que significa que no dependen de otros servicios para su funcionamiento.

- Escalabilidad: Los microservicios se pueden escalar de forma independiente.

- Mantenibilidad: Los microservicios son más fáciles de mantener que las aplicaciones monolíticas.

- Adaptabilidad: Los microservicios se pueden adaptar fácilmente a los cambios en los requisitos comerciales.

#### Ventajas

- Escalabilidad: Los microservicios se pueden escalar de forma independiente, lo que permite a las aplicaciones adaptarse a los cambios en el tráfico o las necesidades de rendimiento.

- Mantenibilidad: Los microservicios son más fáciles de mantener que las aplicaciones monolíticas, ya que cada servicio es un código base independiente.

- Mantenibilidad: Los microservicios son más fáciles de mantener que las aplicaciones monolíticas, ya que cada servicio es un código base independiente.


#### Desventajas

- Complejidad: La arquitectura de microservicios puede ser más compleja que las arquitecturas monolíticas tradicionales.

- Comunicación: La comunicación entre microservicios puede ser más compleja que la comunicación entre componentes de una aplicación monolítica.

- Gestión: La gestión de una aplicación de microservicios puede ser más compleja que la gestión de una aplicación monolítica.

#### Desarrollo de microservicios

El desarrollo de microservicios requiere un enfoque diferente al desarrollo de aplicaciones monolíticas. Los siguientes son algunos consejos para el desarrollo de microservicios:

- Descomponer la aplicación en servicios pequeños: Los microservicios deben ser pequeños y fáciles de entender.

- Utilizar un modelo de arquitectura uniforme: Todos los microservicios deben seguir un modelo de arquitectura uniforme para facilitar su desarrollo y mantenimiento.

- Utilizar un lenguaje de programación y un framework común para todos los microservicios facilita la comunicación entre ellos.

- Utilizar un sistema de gestión de contenedores: Un sistema de gestión de contenedores facilita la implementación y el escalado de microservicios.

#### Ejemplificación

Si quieres ver un ejemplo práctico puedes ver en la carpeta [estilo_de_microservicios](estilo_de_microservicios) donde encontrarás de forma explícita los fundamentos que se explican al inicio [Estilo de arquitectura de microservicios](#estilo-de-arquitectura-de-microservicios), si tienes ya un entendimiento básico en la programación podrás notar como se secciona el código en este estilo de arquitectura.

En este ejemplo, el servicio de autenticación y el servicio de recursos son dos microservicios independientes que se ejecutan en puertos diferentes. Cada servicio tiene sus propias rutas, controladores y lógica comercial. Los servicios pueden comunicarse entre sí a través de solicitudes HTTP o mediante una cola de mensajes, dependiendo de la arquitectura específica.

Este es un ejemplo simplificado, y en aplicaciones del mundo real, los servicios serían más complejos y manejarían la lógica comercial completa. La arquitectura de microservicios permite escalar y mantener cada servicio por separado, lo que facilita el desarrollo y la escalabilidad.

---
Última actualización ***14/10/2023*** por [@DatBrian](https://github.com/DatBrian)