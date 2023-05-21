export default function className(
  ...args: (string | false | Record<string, boolean>)[]
) {
  let className = "";
  for (const arg of args) {
    if (typeof arg === "string") className += ` ${arg}`;
    else if (typeof arg === "object") {
      for (const key in arg) if (arg[key]) className += ` ${key}`;
    }
  }
  return className.trim();
}
