const splitLetter = (text: string) => {
  return text.split("").map((letter, index) =>
    letter === " " ? (
      " "
    ) : (
      <span key={index} className="letter" style={{ display: "inline" }}>
        {letter}
      </span>
    ),
  );
};

export default splitLetter;
