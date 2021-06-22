// TODO only allow videos from youtube?
export const isValidEmbedUrl = (videoEmbedUrl: string): boolean => {
  const REG = '^www.youtube.com/embed/S*$'
  return !!videoEmbedUrl.match(REG)
}
