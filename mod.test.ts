import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import className from "./mod.ts";

Deno.test("Strings (variadic)", () => {
  assertEquals(className("foo", true && "bar", "baz"), "foo bar baz");
});

Deno.test("Objects", () => {
  assertEquals(className({ foo: true, bar: false, baz: true }), "foo baz");
});

Deno.test("Variadic", () => {
  assertEquals(
    className(true && "foo", false, { bar: true }, false && "foobar", "baz"),
    "foo bar baz",
  );
});
