export function getSomefolkImageUrl(
  name: string,
  extension: 'png' | 'jpg' | 'jpeg' | 'gif' | 'avif' | 'svg'
) {
  return new URL(`../../public/somefolk/${name}.${extension}`, import.meta.url).href;
}

export function getTerminalImageUrl(
  name: string,
  extension: 'png' | 'jpg' | 'jpeg' | 'gif' | 'avif' | 'svg'
) {
  return new URL(`../../public/terminal/${name}.${extension}`, import.meta.url).href;
}
