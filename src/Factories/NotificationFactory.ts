import { INotifier } from "./INotifier";
import { EmailNotifier } from "./EmailNotifier";
import { SmsNotifier } from "./SmsNotifier";
import { PushNotifier } from "./PushNotifier";

export class NotificationFactory {

    static create(type: string): INotifier {

        switch(type.toLowerCase()) {

            case "email":
                return new EmailNotifier();

            case "sms":
                return new SmsNotifier();

            case "push":
                return new PushNotifier();

            default:
                throw new Error(
                    `Tipo de notificación inválido: ${type}`
                );
        }
    }
}