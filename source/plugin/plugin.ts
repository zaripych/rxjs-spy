/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/rxjs-spy
 */

import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { Subscription } from "rxjs/Subscription";

export interface SubscriberRef {
    id: number;
    observable: Observable<any>;
    subscriber: Subscriber<any>;
    timestamp: number;
}

export interface SubscriptionRef extends SubscriberRef {
    subscription: Subscription;
}

export type Notification = "complete" | "error" | "next" | "subscribe" | "unsubscribe";

export interface Plugin {

    afterComplete(ref: SubscriptionRef): void;
    afterError(ref: SubscriptionRef, error: any): void;
    afterNext(ref: SubscriptionRef, value: any): void;
    afterSubscribe(ref: SubscriptionRef): void;
    afterUnsubscribe(ref: SubscriptionRef): void;
    beforeComplete(ref: SubscriptionRef): void;
    beforeError(ref: SubscriptionRef, error: any): void;
    beforeNext(ref: SubscriptionRef, value: any): void;
    beforeSubscribe(ref: SubscriberRef): void;
    beforeUnsubscribe(ref: SubscriptionRef): void;
    flush(): void;
    select(ref: SubscriptionRef): ((source: Observable<any>) => Observable<any>) | null;
    teardown(): void;
}

export class BasePlugin implements Plugin {

    afterComplete(ref: SubscriptionRef): void {}
    afterError(ref: SubscriptionRef, error: any): void {}
    afterNext(ref: SubscriptionRef, value: any): void {}
    afterSubscribe(ref: SubscriptionRef): void {}
    afterUnsubscribe(ref: SubscriptionRef): void {}
    beforeComplete(ref: SubscriptionRef): void {}
    beforeError(ref: SubscriptionRef, error: any): void {}
    beforeNext(ref: SubscriptionRef, value: any): void {}
    beforeSubscribe(ref: SubscriberRef): void {}
    beforeUnsubscribe(ref: SubscriptionRef): void {}
    flush(): void {}
    select(ref: SubscriptionRef): ((source: Observable<any>) => Observable<any>) | null { return null; }
    teardown(): void {}
}
