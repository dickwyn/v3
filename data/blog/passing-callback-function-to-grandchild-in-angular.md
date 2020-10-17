---
templateKey: blog-post
author: Dick Wyn Yong
title: How to pass a callback function to a grandchild component in Angular
date: 2020-10-17T16:57:06.673Z
description: Calling a function from the child to the parent to the grandparent
featuredPost: false
tags:
  - angular
  - javascript
  - tutorial
---

Recently, I was refactoring some Angular components and I stumbled upon an issue of passing a callback function from a grandparent to the child component. Up to that point in time, I have only passed callback functions from the parent to the child by using the `@Output()` decorator and the `EventEmitter` class.

### Premise

The idea here is that I wanted to create a generic base component and a more specific component that has the layout and functionality of the base component.

For example, I have this alert component which has a dismiss button. I will create a generic alert component (`base-alert.component.ts`) that has the option to override the default onClick function of the close button.

Next, I'll create a more specific alert component (`cta-alert.component.ts`) based off of that generic alert component that has a different dismiss button text than the generic alert component and allows the user to optionally override the default onClick function of the dismiss button.

Meaning that, if I didn't pass a callback function to the `cta-alert.component.ts` component, it will default to the default onClick function that was defined in `base-alert.component.ts`.

Here's how the relation between the components look like in this example:

- child `base-alert.component.ts`
- parent `cta-alert.component.ts`
- grandparent `app.component.ts`

### The problem

So, yeah the idea is pretty simple. Use a the custom callback function if it was provided, otherwise use the default onClick function.

```javascript
<app-base-alert
    (dismissButtonCallback)="dismissButtonCallback.emit()"
></app-base-alert>
```

One of the first things that came to mind was to try and conditionally include the `dismissButtonCallback` directive in the `cta-alert.component.ts` component only if a callback function was passed in `app.component.ts`.

From the grandparent to the parent component, I could see whether a callback function was passed by looking at the length of observers in the `EventEmitter` object. So if `this.dismissButtonCallback.observers.length > 0`, a callback function was passed.

The problem came when I tried to do the same check in the child component. It always returned the length of 1 for the `observers.length`.

This was due to the fact that, if the directive `dismissButtonCallback` is included, the `@Output()` decorator will always be initialized with an EventEmitter instance. This is regardless of what value I passed into that directive. I tried passing `null` and `undefined` and it still registered as an `EventEmitter` instance with and `observers.length` of 1.

```javascript
ERROR Error: @Output primaryButtonCallback not initialized in 'CtaAlertComponent'.
    at listenerInternal (core.js:15201)
    at Module.ɵɵlistener (core.js:15053)
    ...
    at ApplicationRef.bootstrap (core.js:28368)
```

So, then I decided to conditionally initialize the `@Output()` decorator with an `EventEmitter` only if a callback function was passed from the grandparent component. But that didn't work as I was continuously getting the following error.

```javascript
export class CtaAlertComponent implements OnInit {
  @Output() dismissButtonCallback?: EventEmitter<any>;

  constructor() {
    if (dismissButtonCallback) {
      this.dismissButtonCallback = new EventEmitter();
    }
  }

  ngOnInit(): void {
    if (dismissButtonCallback) {
      this.dismissButtonCallback = new EventEmitter();
    }
  }
}
```

I even tried to initialize the `@Output()` decorator in the constructor and the `OnInit` lifecyle hook but it seems to only like it when the `EventEmitter` is initialized when the `@Output()` decorator is defined.

### My solution

In the end, I managed to get it working by passing the callback function from the grandparent to the parent component with an `@Input` decorator and I also created an `overrideDismissButton` property in the child component to help identify if the grandparent had passed a callback function or not.

So, for the example below, if I clicked on the 'I Understand' button of the second alert, the message 'firing from app component' will appear in the console opposed to 'firing from base alert component' which is default onClick action of from the `base-alert.component.ts` component

```javascript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-base-alert></app-base-alert>
    <app-cta-alert [dismissButtonCallback]="customCallback"></app-cta-alert>
  `,
})
export class AppComponent {
  customCallback(): void {
    console.log('firing from app component');
  }
}
```

```javascript
// cta-alert.component.ts
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cta-alert',
  template: `
    <app-base-alert
      [dismissButtonText]="'I Understand'"
      (dismissButtonCallback)="dismissButtonCallback()"
      [overrideDismissButton]="isCallbackPassed"
    >
    </app-base-alert>
  `,
})
export class CtaAlertComponent implements OnInit {
  @Input() dismissButtonCallback?: any;

  isCallbackPassed: boolean;

  ngOnInit(): void {
    if (this.dismissButtonCallback) {
      this.isCallbackPassed = true;
    } else {
      this.isCallbackPassed = false;
    }
  }
}
```

```javascript
// base-alert.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-alert',
  template: `
    <div>
      <p>A simple alert component</p>
      <button
        type="button"
        (click)="
          overrideDismissButton
            ? dismissButtonCallback.emit()
            : onDismissButtonClick()
        "
      >
        {{ dismissButtonText }}
      </button>
    </div>
  `,
  styles: [
    `
      div {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: skyblue;

        p {
          display: inline-block;
        }
      }
    `,
  ],
})
export class BaseAlertComponent {
  @Input() dismissButtonText?: string = 'Close';

  @Input() overrideDismissButton?: boolean = false;

  @Output() dismissButtonCallback?: EventEmitter<any> = new EventEmitter();

  onDismissButtonClick(): void {
    console.log('firing from base alert component');
  }
}
```
