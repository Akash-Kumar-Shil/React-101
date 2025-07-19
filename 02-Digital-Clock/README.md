# Digital Clock

## Step 1:
Get current time from the system using `new  Date()`

like this:
```js
let now = new Date();
```

Get Houres, Minutes and Seconds from the current time with `getHours()`, `getMinutes()` and `getSeconds()`.

like this:
```js
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
```

## Step 2:
Update the time every second using `setInterval()`