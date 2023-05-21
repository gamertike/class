# Class

A tiny utility for constructing HTML classes conditionally.

## Usage

```ts
import className from "https://deno.land/x/class/mod.ts";

// Strings (variadic)
className("foo", true && "bar", "baz"); // "foo bar baz"

// Objects
className({ foo: true, bar: false, baz: true }); // "foo baz"

// Variadic
className(true && "foo", false, { bar: true }, false && "foobar", "baz"); // "foo bar baz"
```
