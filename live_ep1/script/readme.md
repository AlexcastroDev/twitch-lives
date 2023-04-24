# Start

Show the tc39, and talk about error constructor in js.

https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-nativeerror-constructors

show wrong way to handle test, for example:

```javascript
const doTask_NotRecommended = (number) => {
    if(typeof number !== 'number') {
        throw 'number must be a number'
    }
    if(number < 0) {
        throw 'number must be a positive number'
    }

    return number / 2
}
```

So, wrapper string error in a Error constructor.

throw new Error('number must be a positive number')

We dont know the error code.

We can use setter like:

```javascript
    throw new Error('number must be a positive number', { cause: 'ERR_MUST_BE_POSITIVE_NUMBER' })
```

```javascript
throw new Error("RSA key generation requires integer inputs.", {
      cause: { code: "NonInteger", values: ['a','z'] },
    });
```

Source: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error


# Custom error

You might want to define your own error types deriving from Error to be able to throw new MyError() and use instanceof MyError to check the kind of error in the exception handler. This results in cleaner and more consistent error handling code.

A simple way to create a custom error:

```javascript
class HttpNotAuthorizedError extends Error {
    constructor() {
        const message = 'HttpError'
        super(message);
        this.name = 'HttpNotAuthorizedError';
        this.status = 401;
    }
}

module.exports = HttpNotAuthorizedError;
```

but the note says:

```
If you are making a library, you should prefer to use error cause to discriminate between different errors emitted — rather than asking your consumers to parse the error message
```


Source: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors