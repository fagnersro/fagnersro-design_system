import { ComponentProps } from 'react'
import { Input, Prefix, TextIputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextIputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextIputContainer>
  )
}

TextInput.displayName = 'TextInput'
