import { Injectable } from '@nestjs/common';
import { PubSub, Subscription } from '@google-cloud/pubsub';
import { parsePubSub } from './helpers';

@Injectable()
export class CatSubscriber {
  subscription: Subscription;
  pubSub: PubSub;
  constructor() {
    this.pubSub = new PubSub();
    this.subscription = this.pubSub.subscription(
      'projects/terraform-test-368613/subscriptions/terraform_subscription_123',
    );
    this.subscription.on('message', (message) => {
      try {
        message.ack();
      } catch (error) {
        message.nack();
      }
      console.log('Received cat message:', parsePubSub(message));
    });
  }
}
