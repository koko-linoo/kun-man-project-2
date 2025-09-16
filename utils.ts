export function getDayRange(selected: Date) {
  const date = selected?.toLocaleDateString().replace(/\//g, "-");

  return [`${date}T00:00:00Z`, `${date}T23:59:59Z`];
}
