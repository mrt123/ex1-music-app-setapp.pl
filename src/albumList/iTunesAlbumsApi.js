export function albumList(rawData) {
  if (rawData === undefined) return [];
  else if (rawData.feed === undefined) return {err: 'unexpected data format'}; // TODO: support error handling in presentation
  return rawData.feed.entry
}