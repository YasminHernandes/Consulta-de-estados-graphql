export type Country = {
  code: string,
  name: string,
  capital: string,
  phone: string,
  currency: string,
  languages: Language[]
  states: State[]
}

export type Language = {
  code: string,
  name: string
}

export type State = {
  code: string,
  name: string
}