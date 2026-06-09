import { Subscription } from "../Models/Subscription";

export interface ISubscriptionRepository {

    save(subscription: Subscription): void;

    findById(id: number): Subscription | undefined;

    findAll(): Subscription[];
}