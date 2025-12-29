declare module "@fontsource/*";

export type Article = {
  title: string,
  description: string | null,
  route: string,
  icon: string | null,
  featured: boolean,
}