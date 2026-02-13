//now if i put . in kind it will give the string properties only for string and number property only for numbers

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `making ${kind} chai....`;
  }
  return `chai order ${kind}`;
}

//truthy value

function serverChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `serving default masala chai`;
}
