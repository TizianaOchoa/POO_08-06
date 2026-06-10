# 💳 Sistema de Gestión de Suscripciones y Facturación Premium

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![POO](https://img.shields.io/badge/Programación%20Orientada%20a%20Objetos-blue?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![SOLID](https://img.shields.io/badge/SOLID-Principles-success?style=for-the-badge)

---

## 📚 Descripción

Sistema desarrollado en **TypeScript** para la gestión de usuarios, planes de suscripción y procesamiento de pagos.

El proyecto fue diseñado aplicando una arquitectura desacoplada y escalable mediante el uso de patrones de diseño y principios SOLID, permitiendo administrar suscripciones premium, generar facturas, procesar pagos y notificar automáticamente distintos eventos del sistema.

---

## 🎯 Objetivos del Proyecto

- Gestionar usuarios y suscripciones.
- Procesar pagos de manera centralizada.
- Generar facturas automáticamente.
- Notificar eventos importantes del sistema.
- Aplicar patrones de diseño orientados a objetos.
- Implementar una arquitectura mantenible y escalable.
- Cumplir con los principios SOLID.

---

## 🎓 Información Académica

| Dato | Información |
|--------|------------|
| 👩‍🎓 Estudiante | **Tiziana Ochoa** |
| 📖 Materia | **Programación Orientada a Objetos** |
| 👨‍🏫 Profesor | **Narciso Pérez** |
| 🎓 Carrera | **Programación Full Stack** |
| 📅 Año | **2° Año** |
| 🏫 Institución | **Universidad Provincial de Córdoba (UPC)** |

---

# 🏗️ Arquitectura Implementada

El proyecto se encuentra organizado siguiendo una arquitectura basada en MVC (Model - View - Controller) junto con patrones de diseño complementarios.

## Modelo (Model)

Representa las entidades principales del sistema:

- User
- Subscription
- Plan
- FreePlan
- PremiumPlan
- Invoice

## Vista (View)

Interfaz de consola encargada de mostrar información al usuario.

- ConsoleView

## Controladores (Controller)

Gestionan el flujo de interacción entre la vista y la lógica de negocio.

- UserController
- SubscriptionController

---

# 🛡️ Patrones de Diseño Implementados

## 1️⃣ Singleton

### Implementación

```plaintext
DatabaseConnection
```

### Responsabilidad

Garantiza una única instancia de la base de datos simulada en memoria durante todo el ciclo de vida de la aplicación.

---

## 2️⃣ Factory Method

### Implementación

```plaintext
NotificationFactory
```

### Productos creados

- EmailNotifier
- SmsNotifier
- PushNotifier

### Responsabilidad

Crear dinámicamente el tipo de notificación adecuado sin que el cliente conozca la lógica de creación.

---

## 3️⃣ Repository Pattern

### Implementación

```plaintext
IUserRepository
UserRepository

ISubscriptionRepository
SubscriptionRepository
```

### Responsabilidad

Abstraer completamente el acceso a los datos y desacoplar la lógica de negocio de la persistencia.

---

## 4️⃣ Observer

### Implementación

```plaintext
PaymentService
```

### Observadores

- EmailNotificationObserver
- MetricsServiceObserver
- AccessControlObserver

### Responsabilidad

Notificar automáticamente a distintos componentes cuando se procesa un pago exitoso.

---

## 5️⃣ MVC

### Implementación

```plaintext
Models
Views
Controllers
```

### Responsabilidad

Separar claramente la presentación, la lógica de negocio y los datos.

---

# ⚖️ Principios SOLID Aplicados

## S — Single Responsibility Principle

Cada clase posee una única responsabilidad específica.

## O — Open/Closed Principle

El sistema puede extenderse agregando nuevos métodos de pago o notificaciones sin modificar código existente.

## L — Liskov Substitution Principle

Las clases FreePlan y PremiumPlan pueden utilizarse como instancias de Plan sin alterar el comportamiento esperado.

## I — Interface Segregation Principle

Se utilizan interfaces específicas:

- IUserRepository
- ISubscriptionRepository
- INotifier
- Observer

## D — Dependency Inversion Principle

Los servicios y controladores dependen de abstracciones y no de implementaciones concretas.

---

# 🔄 Flujo Principal del Sistema

## Registro de Usuario

```plaintext
Usuario
   ↓
UserController
   ↓
UserService
   ↓
UserRepository
   ↓
DatabaseConnection
```

---

## Suscripción a un Plan

```plaintext
Usuario
   ↓
SubscriptionController
   ↓
SubscriptionService
   ↓
SubscriptionRepository
```

---

## Procesamiento de Pago

```plaintext
Usuario
   ↓
PaymentService
   ↓
Observer
```

### Acciones Automáticas

✅ Generación de factura

✅ Envío de notificación

✅ Actualización de métricas

✅ Activación de acceso premium

---

# 📂 Estructura del Proyecto

```plaintext
src/
│
├── Config/
│   └── DatabaseConnection.ts
│
├── Controllers/
│   ├── UserController.ts
│   └── SubscriptionController.ts
│
├── Factories/
│   ├── INotifier.ts
│   ├── EmailNotifier.ts
│   ├── SmsNotifier.ts
│   ├── PushNotifier.ts
│   └── NotificationFactory.ts
│
├── Models/
│   ├── User.ts
│   ├── Plan.ts
│   ├── FreePlan.ts
│   ├── PremiumPlan.ts
│   ├── Subscription.ts
│   └── Invoice.ts
│
├── Observers/
│   ├── Observer.ts
│   ├── EmailNotificationObserver.ts
│   ├── MetricsServiceObserver.ts
│   └── AccessControlObserver.ts
│
├── Repositories/
│   ├── IUserRepository.ts
│   ├── UserRepository.ts
│   ├── ISubscriptionRepository.ts
│   └── SubscriptionRepository.ts
│
├── Services/
│   ├── UserService.ts
│   ├── SubscriptionService.ts
│   └── PaymentService.ts
│
├── Views/
│   └── ConsoleView.ts
│
└── main.ts
```

---

# 📊 Diagrama UML

El proyecto incluye un diagrama UML que representa la arquitectura completa del sistema y la interacción entre los distintos patrones de diseño implementados.

```plaintext
UML.png
```

---

# 🐳 Docker

## Construir la imagen

```bash
docker build -t poo_08-06 .
```

## Ejecutar el contenedor

```bash
docker run poo_08-06
```

---

# 🚀 Ejecución Local

## Instalar dependencias

```bash
npm install
```

## Compilar el proyecto

```bash
npm run build
```

## Ejecutar

```bash
npm start
```

---

# ✅ Resultado Esperado

```plaintext
Usuario Tiziana registrado correctamente
Suscripción creada correctamente
Pago procesado por $10000
[EMAIL] Factura enviada a Tiziana
Ingresos registrados: $10000
Acceso premium habilitado para Tiziana
```

---

# 👩‍💻 Autor

**Tiziana Ochoa**

**Programación Full Stack - 2° Año**

**Universidad Provincial de Córdoba (UPC)**

---

## ⭐ Proyecto Académico

Trabajo práctico desarrollado para la materia **Programación Orientada a Objetos**, aplicando patrones de diseño, principios SOLID y arquitectura orientada a objetos utilizando TypeScript y Docker.