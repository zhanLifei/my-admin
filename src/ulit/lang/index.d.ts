interface TranslateOptions {
  [key: string]: string | number | boolean
}

export const lang: string

export default function translator (key: string, options?: TranslateOptions): string
