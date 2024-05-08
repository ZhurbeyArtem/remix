import { CensorshipWord } from "./CensorshipWord"

interface ICensorship {
  text: string,
  badWords: string[]
}

export const Censorship = ({ text, badWords }: ICensorship) => {

  return (
    <div>
      {
        text.split(' ').map((word: string, index: number) =>
          badWords.includes(word) ? <CensorshipWord key={index} word={word} /> : <span key={index}> {word} </span>
        )
      }
    </div>
  )
}
