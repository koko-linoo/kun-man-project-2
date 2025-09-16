export function getDayRange(selected: Date) {
  const localDate = selected?.toLocaleDateString();

  const formattedDate = localDate.replace(/\//g, "-");

  const [month, day, year] = formattedDate.split("-").map(Number);

  const localStart = new Date(year, month - 1, day, 0, 0, 0);
  const localEnd = new Date(year, month - 1, day, 23, 59, 59);

  const startUTC = localStart.toISOString();
  const endUTC = localEnd.toISOString();

  return [startUTC, endUTC];
}
