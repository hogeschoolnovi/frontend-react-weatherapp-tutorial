function createTimeString(timestamp) {
  const day = new Date(timestamp * 1000);

  return day.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default createTimeString;