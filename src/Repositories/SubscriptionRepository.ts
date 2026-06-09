import { DatabaseConnection } from "../Config/DatabaseConnection";
import { Subscription } from "../Models/Subscription";
import { ISubscriptionRepository } from "./ISubscriptionRepository";

export class SubscriptionRepository
implements ISubscriptionRepository {

    private db = DatabaseConnection.getInstance();

    save(subscription: Subscription): void {

        this.db.subscriptions.push(subscription);
    }

    findById(id: number): Subscription | undefined {

        return this.db.subscriptions.find(
            subscription => subscription.id === id
        );
    }

    findAll(): Subscription[] {

        return this.db.subscriptions;
    }
}