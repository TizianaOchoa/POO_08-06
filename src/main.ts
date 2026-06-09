import { NotificationFactory } from "./Factories/NotificationFactory";

const notifier =
NotificationFactory.create("email");

notifier.send(
    "Bienvenido al sistema Premium"
);