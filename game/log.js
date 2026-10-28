export function error(source, message, dump) {
  console.error(`ERROR: ${source}, reports: "${message}"`);
  if (dump) {
    console.error(dump);
  }
}

export function warn(source, message, dump) {
  console.warn(`WARNING: ${source}, reports: "${message}"`);
  if (dump) {
    console.warn(dump);
  }
}
