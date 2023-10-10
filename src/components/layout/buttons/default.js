const Default = ({
  content,
  css,
  verifyNumber,
  service,
  moduleData,
  tat,
  nextPage,
  onClick,
}) => {
  return (
    <button className={css} onClick={onClick}>
      {content}{" "}
    </button>
  );
};

export default Default;
