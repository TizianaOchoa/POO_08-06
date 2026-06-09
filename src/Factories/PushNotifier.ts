import { INotifier } from "./INotifier";

export class PushNotifier implements INotifier {

    send(message: string): void {

        console.log(`[PUSH] ${message}`);
    }
}