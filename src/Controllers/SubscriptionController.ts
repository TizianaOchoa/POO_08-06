import { Subscription } from "../Models/Subscription";
import { SubscriptionService } from "../Services/SubscriptionService";

export class SubscriptionController {

    constructor(
        private subscriptionService: SubscriptionService
    ) {}

    createSubscription(
        subscription: Subscription
    ): void {

        this.subscriptionService.createSubscription(
            subscription
        );
    }

    listSubscriptions(): void {

        console.log(
            this.subscriptionService.getSubscriptions()
        );
    }
}