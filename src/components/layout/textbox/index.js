const Textbox = ({
  css,
  placeholder,
  onChange,
  maxLength,
  type,
  value,
  onKeyDown,
}) => {
  return (
    <input
      onKeyDown={onKeyDown}
      type={type}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
      className={css}
    />
  );
};

export default Textbox;
