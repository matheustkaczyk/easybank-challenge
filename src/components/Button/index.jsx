export const Button = ({ text, type, disabled, classN }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classN}
    >
      {text}
    </button>
  )
}