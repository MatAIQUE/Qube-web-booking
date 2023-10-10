const Textbox = ({
  className,
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
      className={className}
    />
  );
};

export default Textbox;
