export default function cleanSet(set, startString) {
  if (!set && !startString && !(set instanceof Set) && typeof startsWith !== 'string') {
    return '';
  }

  const result = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const rem = value.substring(startString.length);

      if (rem && rem !== value) {
        result.push(rem);
      }
    }
  }

  return result.join('-');
}
