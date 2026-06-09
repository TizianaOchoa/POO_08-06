import { Observer } from "./Observer";

export class EmailNotificationObserver
implements Observer {

    update(data: any): void {

        console.log(
            `Factura enviada a ${data.user.email}`
        );
    }
}