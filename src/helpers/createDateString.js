function createDateString(timestamp) {
  const day = new Date(timestamp * 1000);
  return day.toLocaleDateString('nl-NL', { weekday: 'long' });
}

export default createDateString;