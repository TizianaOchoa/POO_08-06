import { User } from "./Models/User";

import { PaymentService } from "./Services/PaymentService";

import { EmailNotificationObserver }
from "./Observers/EmailNotificationObserver";

import { MetricsServiceObserver }
from "./Observers/MetricsServiceObserver";

import { AccessControlObserver }
from "./Observers/AccessControlObserver";

const user = new User(
    1,
    "Tiziana",
    "tizi@gmail.com",
    "email"
);

const paymentService =
new PaymentService();

paymentService.addObserver(
    new EmailNotificationObserver()
);

paymentService.addObserver(
    new MetricsServiceObserver()
);

paymentService.addObserver(
    new AccessControlObserver()
);

paymentService.processPayment(
    user,
    10000
);

console.log(user);