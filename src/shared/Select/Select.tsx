type Option = {
  label: string
  value: string
}

interface SelectProps {
  defaultValue: string
  options: Option[]
}

export const Select = (props: SelectProps) => {
  const { defaultValue, options } = props

  return (
    <select defaultValue={defaultValue} className="select select-accent">
      <option disabled selected>{defaultValue}</option>
      {options.map((option, i) =>
        <option key={`${option.label}-${i}`}>
          {option?.label}
        </option>
      )}
    </select>
  )
}