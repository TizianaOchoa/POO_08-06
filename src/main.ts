import { User } from "./Models/User";
import { PremiumPlan } from "./Models/PremiumPlan";
import { Subscription } from "./Models/Subscription";

import { UserRepository } from "./Repositories/UserRepository";
import { SubscriptionRepository } from "./Repositories/SubscriptionRepository";

import { UserService } from "./Services/UserService";
import { SubscriptionService } from "./Services/SubscriptionService";
import { PaymentService } from "./Services/PaymentService";

import { UserController } from "./Controllers/UserController";
import { SubscriptionController } from "./Controllers/SubscriptionController";

import { EmailNotificationObserver } from "./Observers/EmailNotificationObserver";
import { MetricsServiceObserver } from "./Observers/MetricsServiceObserver";
import { AccessControlObserver } from "./Observers/AccessControlObserver";

// Repositories
const userRepository = new UserRepository();
const subscriptionRepository = new SubscriptionRepository();

// Services
const userService = new UserService(userRepository);
const subscriptionService = new SubscriptionService(subscriptionRepository);

// Controllers
const userController = new UserController(userService);
const subscriptionController = new SubscriptionController(subscriptionService);

// Usuario
const user = new User(
    1,
    "Tiziana",
    "tizi@gmail.com",
    "email"
);

// Registro
userController.register(user);

// Plan Premium
const premiumPlan = new PremiumPlan();

// Suscripción
const subscription = new Subscription(
    1,
    user,
    premiumPlan
);

subscriptionController.createSubscription(subscription);

// Pago
const paymentService = new PaymentService();

// Observers
paymentService.addObserver(
    new EmailNotificationObserver()
);

paymentService.addObserver(
    new MetricsServiceObserver()
);

paymentService.addObserver(
    new AccessControlObserver()
);

// Procesar pago
paymentService.processPayment(
    user,
    premiumPlan.price
);

console.log("\nEstado final del usuario:");
console.log(user);