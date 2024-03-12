export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const int8 = new ArrayBuffer(length);
  const dv = new DataView(int8);

  dv.setInt8(position, value);

  return dv;
}
