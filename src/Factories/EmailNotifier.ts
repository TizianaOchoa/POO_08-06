import { INotifier } from "./INotifier";

export class EmailNotifier implements INotifier {

    send(message: string): void {

        console.log(`[EMAIL] ${message}`);
    }
}