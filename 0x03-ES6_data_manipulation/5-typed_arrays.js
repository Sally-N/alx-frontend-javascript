export default function createInt8TpyedArray(length, number, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  if (position >= length) {
    throw Error('Position outside range');
  } else {
    view.setInt8(position, value);
  }

  return view;
}
