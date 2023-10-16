<h1 align="center"> Patrones Arquitectónicos</h1>

<img src="images\banner2.png" width="100%" height="500">

## Contenidos:
1. [Definición](#definición)
2. [Ejemplos de patrones arquitectónicos](#algunos-ejemplos-de-patrones-arquitectónicos)
    - 2.1 [Patrón de arquitectura de microKernel](#patrón-de-arquitectura-de-microkernel)
        - 2.1.1 [Funcionamiento](#funcionamiento)
        - 2.1.2 [Ventajas](#ventajas)
        - 2.1.3 [Desventajas](#desventajas)
        - 2.1.4 [Aplicaciones](#aplicaciones)
        - 2.1.5 [Ejemplificación](#ejemplificación)
    - 2.2 [Patrón de arquitectura didrigida por eventos](#patrón-de-arquitectura-dirigida-por-eventos)
        - 2.2.1 [Componentes](#componentes)
        - 2.2.2 [Ventajas](#ventajas-1)
        - 2.2.3 [Casos de uso](#casos-de-uso)
        - 2.2.4 [Ejemplificación](#ejemplificacic3b3n-1)

## Definición

Los patrones arquitectónicos son soluciones comprobadas a problemas de diseño arquitectónico comunes. Proporcionan una plantilla para organizar los componentes de un sistema de una manera que resuelva un problema específico.

## Algunos ejemplos de patrones arquitectónicos

### Patrón de arquitectura de microKernel

El patrón de arquitectura de microkernel es un estilo arquitectónico que divide un sistema en dos partes principales: un microkernel y un conjunto de módulos externos. El microkernel es un núcleo pequeño y esencial que proporciona las funciones básicas del sistema, como la comunicación entre procesos, la gestión de memoria y la seguridad. Los módulos externos, también conocidos como plugins, proporcionan la funcionalidad adicional del sistema.

La idea principal del patrón de microkernel es que el microkernel sea lo más pequeño posible, para que sea más eficiente y fácil de mantener. Los módulos externos, por otro lado, pueden ser personalizados o reemplazados para adaptar el sistema a las necesidades específicas del usuario.

#### Funcionamiento

El microkernel proporciona un conjunto de servicios a los módulos externos. Estos servicios pueden incluir:

- **Comunicación entre procesos:** Permite a los módulos externos comunicarse entre sí.

- **Gestión de memoria:** Permite a los módulos externos administrar su propia memoria.

- **Seguridad:** Proporciona mecanismos de seguridad para proteger los recursos del sistema.

Los módulos externos interactúan con el microkernel a través de llamadas de sistema. Estas llamadas de sistema permiten a los módulos externos solicitar servicios del microkernel.

#### Ventajas

El patrón de microkernel ofrece una serie de ventajas, entre las que se incluyen:

- **Eficiencia:** El microkernel es pequeño y eficiente, lo que puede mejorar el rendimiento del sistema.

- **Extensibilidad:** Los módulos externos pueden ser personalizados o reemplazados para adaptar el sistema a las necesidades específicas del usuario.

- **Mantenibilidad:** El microkernel es más fácil de mantener que un sistema monolítico.

#### Desventajas

El patrón de microkernel también presenta algunas desventajas, entre las que se incluyen:

- **Complejidad:** El microkernel puede ser más complejo de desarrollar que un sistema monolítico.

- **Rendimiento:** Los módulos externos pueden afectar el rendimiento del sistema.


#### Aplicaciones

El patrón de microkernel se utiliza en una variedad de aplicaciones, entre las que se incluyen:

- **Sistemas operativos:** Algunos sistemas operativos modernos, como QNX y Minix, utilizan una arquitectura de microkernel.

- **Aplicaciones de software:** Muchas aplicaciones de software, como las suites de oficina y los editores de texto, utilizan una arquitectura de microkernel para permitir la personalización y la extensión.

- **Infraestructuras de software:** Algunas infraestructuras de software, como los sistemas de gestión de contenido y los sistemas de gestión de bases de datos, utilizan una arquitectura de microkernel para mejorar la escalabilidad y la flexibilidad.

#### Ejemplificación

Si quieres ver un ejemplo práctico puedes ver en la carpeta [patron_de_microKernel](patron_de_microKernel) donde encontrarás de forma explícita la estructura y funcionamiento explicado anteriormente, si tienes ya un entendimiento básico en la programación podrás notar como se secciona el código en este estilo de arquitectura.

En este ejemplo, hemos creado un núcleo simple Microkernel que puede cargar módulos y ejecutar métodos de esos módulos. Hemos definido dos módulos, taskModule y userModule, que proporcionan funcionalidad para administrar tareas y usuarios.

El kernel carga estos módulos y luego los usa para agregar tareas, obtener tareas, obtener un usuario y actualizar un usuario.

Este es un ejemplo simplificado del patrón Microkernel. En aplicaciones más grandes, los módulos podrían ser complementos reales con funcionalidad más compleja. El patrón Microkernel permite la extensibilidad de la aplicación sin modificar su núcleo.

### Patrón de arquitectura dirigida por eventos

La arquitectura dirigida por eventos (EDA) es un patrón de arquitectura software que promueve la producción, detección, consumo de, y reacción a eventos. Un evento puede ser definido como "un cambio significativo en un estado".

En una arquitectura EDA, los sistemas se comunican entre sí mediante eventos. Un evento es un mensaje que se envía para notificar a otros sistemas de que algo ha sucedido. Los eventos pueden ser generados por cualquier sistema o dispositivo, y pueden ser consumidos por cualquier sistema o dispositivo que esté interesado en ellos.

#### Componentes

Una arquitectura dirigida por eventos consta de los siguientes componentes:

- **Productores de eventos:** Los productores de eventos son los sistemas que generan eventos.

- **Eventos:** Los eventos son los mensajes que se envían para notificar a otros sistemas de que algo ha sucedido.

- **Consumidores de eventos:** Los consumidores de eventos son los sistemas que consumen eventos.

- **Canales de eventos:** Los canales de eventos son las vías por las que se transmiten los eventos.

#### Ventajas

La arquitectura EDA tiene una serie de ventajas, entre las que se incluyen:

- **Acoplado débil:** Los sistemas en una arquitectura EDA están acoplados débilmente, lo que significa que no están directamente vinculados entre sí. Esto hace que los sistemas sean más flexibles y fáciles de escalar.

- **Reactividad:** Los sistemas en una arquitectura EDA pueden reaccionar rápidamente a eventos. Esto es importante para aplicaciones que requieren un procesamiento en tiempo real.

- **Escalabilidad:** Las arquitecturas EDA son escalables, ya que pueden agregarse nuevos eventos o consumidores de eventos sin afectar al rendimiento del sistema.

#### Casos de uso

La arquitectura dirigida por eventos es adecuada para una amplia gama de aplicaciones, entre las que se incluyen:

- **Aplicaciones de procesamiento en tiempo real:** Las arquitecturas EDA son adecuadas para aplicaciones que requieren un procesamiento en tiempo real, como el seguimiento de transacciones financieras o la detección de intrusiones en la red.

- **Aplicaciones de integración:** Las arquitecturas EDA son adecuadas para aplicaciones de integración, ya que permiten conectar sistemas heterogéneos entre sí.

- **Aplicaciones de aprendizaje automático:** Las arquitecturas EDA son adecuadas para aplicaciones de aprendizaje automático, ya que permiten alimentar datos a los modelos de aprendizaje automático de forma rápida y eficiente.

#### Ejemplificación

Si quieres ver un ejemplo práctico puedes ver en la carpeta [patron_dirigida_por_eventos](patron_dirigida_por_eventos) donde encontrarás de forma explícita la estructura y funcionamiento explicado anteriormente, si tienes ya un entendimiento básico en la programación podrás notar como se secciona el código en este patrón de arquitectura.

En este ejemplo, hemos implementado una arquitectura Dirigida por Eventos para administrar un carrito de compras en una tienda en línea. El eventEmitter se encarga de gestionar los eventos, y los componentes Product y Cart se comunican a través de eventos.

Cuando un producto se agrega al carrito, el evento 'productAddedToCart' se emite y el carrito responde agregando el producto al carrito del usuario correspondiente. Luego, podemos consultar el contenido del carrito para cada usuario.

Este es un ejemplo simple que muestra cómo el patrón Dirigida por Eventos permite una comunicación eficiente y desacoplada entre componentes en una aplicación. En aplicaciones más grandes, esto puede escalar para manejar eventos más complejos y sistemas distribuidos.

    Ten en cuenta que el event importado es propio de node.js

---
Última actualización ***16/10/2023*** por [@DatBrian](https://github.com/DatBrian)