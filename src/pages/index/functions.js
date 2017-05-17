export function generateLinkName (text, active) {
  const modifiedText = text.toLowerCase().replace(' ', '_')
  return active ? `island.html?slug=${modifiedText}` : '#'
}
