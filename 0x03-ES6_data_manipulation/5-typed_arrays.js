export default function createInt8TpyedArray(length, number, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  try {
    view.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return view;
}
