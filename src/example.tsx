import React from "react";

export const lulz = (count: number) => {
  return "LOL!".repeat(count);
};

export const Rofl = (props: { count: number }) => (
  <h1>{"ROFL!".repeat(props.count)}</h1>
);

interface ListNode<T> {
  next?: ListNode<T>;
  previous?: ListNode<T>;
  value: T;
}

export class LRUCache {
  constructor(private capacity: number) {
    this.terminalNode = { value: Number.POSITIVE_INFINITY };
    this.accessQueue = this.terminalNode;
    this.terminalNode.next = this.terminalNode;
    this.terminalNode.previous = this.terminalNode;
  }

  private terminalNode: ListNode<number> | undefined = {
    value: Number.POSITIVE_INFINITY,
  };

  private accessQueue: ListNode<number> | undefined = this.terminalNode;

  private store: Map<number, ListNode<number>> = new Map();
  private elementCount = 0;

  // If key is in cache, return; else return -1
  get(key: number): number {
    if (!this.accessQueue) {
      throw new Error("Access queue is somehow undefined");
    }
    const listNode = this.store.get(key);

    // If we retrieved nothing we return -1.
    if (listNode === undefined) {
      return -1;
    }

    // We need to update the access tracking.
    // Remove it from the array.
    const formerPrevious = listNode.previous;
    const formerNext = listNode.next;
    if (formerPrevious && formerNext) {
      formerPrevious.next = formerNext;
      formerNext.previous = formerPrevious;
    } else {
      throw new Error("Broken list in `get`, panicking at first opportunity");
    }
    // Graft it into the start of the array.
    const currentFirstNode = this.accessQueue;
    const currentSecondNode = this.accessQueue.next;
    if (currentFirstNode && currentSecondNode) {
      // graft
      currentFirstNode.next = this.accessQueue;
      this.accessQueue.previous = currentFirstNode;
      currentSecondNode.previous = this.accessQueue;
      this.accessQueue.next = currentSecondNode;
    } else {
      throw new Error("Broken list in `get`, panicking at second opportunity");
    }

    return listNode === undefined ? -1 : listNode.value;
  }

  // Put value in cache. If at capacity evict last-used value first.
  put(key: number, value: number): void {
    this.elementCount;

    const listNode = this.store.get(key);
    if (listNode) {
      listNode.value = value;
      return;
    }

    if (this.elementCount == this.capacity) {
      // need to evict.
      // Which key to evict?
      queueMicrotask(() => {
        const iterator = this.store.keys();
        let i = 1;
        // walk map keys and find last element. Delete.
        while (i++ < this.store.size && iterator.next()) {
          /* empty */
        }
        const nextKey = iterator.next().value;
        if (nextKey) {
          this.store.delete(nextKey);
        } else {
          console.log("oops");
        }
      });
      this.elementCount--;
    }

    // Update capacity tracking
    this.elementCount++;
    // And store.
    this.store.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
