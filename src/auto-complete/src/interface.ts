import type {
  SelectBaseOption,
  SelectGroupOption
} from '../../select/src/interface'

export type AutoCompleteOption = SelectBaseOption<string, string>
export interface AutoCompleteGroupOption
  extends Omit<SelectGroupOption, 'children'> {
  children: AutoCompleteOptions
}

export type AutoCompleteOptions = Array<
  AutoCompleteOption | AutoCompleteGroupOption | string
>

export type OnUpdateValue = (value: string & (string | null)) => void
export type OnUpdateImpl = (value: string | null) => void
export type OnSelect = (value: string & number) => void
export type OnSelectImpl = (value: string | number) => void

export interface AutoCompleteInst {
  focus: () => void
  blur: () => void
}

export interface AutoCompleteDefaultSlotProps {
  handleInput: (value: string) => void
  handleFocus: (e: FocusEvent) => void
  handleBlur: (e: FocusEvent) => void
  value: string | null
}
