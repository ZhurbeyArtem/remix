import { useState } from "react"

export const CensorshipWord = ({ word }: { word: string }) => {
  const [visible, isVisible] = useState<boolean>(false)

  return (
    <span onClick={() => isVisible(!visible)}>
      {visible ? word : '*'.repeat(word.length)}
    </span>
  )
}
