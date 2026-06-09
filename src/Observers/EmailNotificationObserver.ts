import { Observer } from "./Observer";
import { NotificationFactory } from "../Factories/NotificationFactory";

export class EmailNotificationObserver implements Observer {

    update(data: any): void {

        const notifier = NotificationFactory.create(
            data.user.notificationType
        );

        notifier.send(
            `Factura enviada a ${data.user.name}`
        );
    }
}