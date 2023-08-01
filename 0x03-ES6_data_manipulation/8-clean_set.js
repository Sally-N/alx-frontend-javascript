export default function cleanSet(set, startString) {
  const filteredSet = [...set].filter((value) => value.startsWith(startString));
  return filteredSet.join('-');
}
