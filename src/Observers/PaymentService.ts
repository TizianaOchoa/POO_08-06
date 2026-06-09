import { Observer } from "../Observers/Observer";
import { User } from "../Models/User";

export class PaymentService {

    private observers: Observer[] = [];

    addObserver(observer: Observer): void {

        this.observers.push(observer);
    }

    private notify(data: any): void {

        this.observers.forEach(
            observer => observer.update(data)
        );
    }

    processPayment(
        user: User,
        amount: number
    ): void {

        console.log(
            `Pago procesado por $${amount}`
        );

        this.notify({
            user,
            amount
        });
    }
}