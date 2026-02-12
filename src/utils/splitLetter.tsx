const splitLetter = (text: string) => {
  if (!text || typeof text !== "string") {
    return text;
  }

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
