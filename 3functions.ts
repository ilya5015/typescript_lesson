function add(a: number, b: number): number {
  return a + b;
}

// Overload function
interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;
function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  } else if (a && !b) {
    return {
      x: a,
      y: undefined,
      default: a.toString(),
    } as MyPositionWithDefault;
  } else {
    return { x: a, y: b };
  }
}
