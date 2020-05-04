export type Validator =
  | { type: typeof VALIDATOR_TYPE_REQUIRE }
  | { type: typeof VALIDATOR_TYPE_MINLENGTH; val: number }
  | { type: typeof VALIDATOR_TYPE_MAXLENGTH; val: number }
  | { type: typeof VALIDATOR_TYPE_MIN; val: number }
  | { type: typeof VALIDATOR_TYPE_MAX; val: number }
  | { type: typeof VALIDATOR_TYPE_EMAIL }

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE' as const
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH' as const
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH' as const
const VALIDATOR_TYPE_MIN = 'MIN' as const
const VALIDATOR_TYPE_MAX = 'MAX' as const
const VALIDATOR_TYPE_EMAIL = 'EMAIL' as const
const VALIDATOR_TYPE_FILE = 'FILE' as const

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE })
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE })
export const VALIDATOR_MINLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
})
export const VALIDATOR_MAXLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
})
export const VALIDATOR_MIN = (val: number) => ({ type: VALIDATOR_TYPE_MIN, val: val })
export const VALIDATOR_MAX = (val: number) => ({ type: VALIDATOR_TYPE_MAX, val: val })
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL })

export const validate = (value: string, validators: Validator[]) => {
  let isValid = true
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value)
    }
  }
  return isValid
}
