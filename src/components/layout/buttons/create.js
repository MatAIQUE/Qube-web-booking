const Create = ({ css, content, onClick }) => {
  return (
    <button onClick={onClick} className={css}>
      {content}{" "}
    </button>
  );
};

export default Create;
