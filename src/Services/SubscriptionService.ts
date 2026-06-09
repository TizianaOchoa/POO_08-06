import { Subscription } from "../Models/Subscription";
import { ISubscriptionRepository } from "../Repositories/ISubscriptionRepository";

export class SubscriptionService {

    constructor(
        private subscriptionRepository: ISubscriptionRepository
    ) {}

    createSubscription(
        subscription: Subscription
    ): void {

        this.subscriptionRepository.save(subscription);

        console.log(
            "Suscripción creada correctamente"
        );
    }

    getSubscriptions(): Subscription[] {

        return this.subscriptionRepository.findAll();
    }
}