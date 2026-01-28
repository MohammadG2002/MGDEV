const splitLetter = (text: string) => {
  return text.split("").map((letter, index) =>
    letter === " " ? (
      " "
    ) : (
      <span key={index} className="letter">
        {letter}
      </span>
    ),
  );
};

export default splitLetter;
