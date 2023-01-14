type ButtonCopyProps = {
  obj: {
    value: string;
  };
  textValue: string;
};

function ButtonCopy({ obj, textValue }: ButtonCopyProps) {
  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <button
      type="button"
      title="Click to copy!"
      onClick={() => copy(obj.value)}
    >
      {textValue}
    </button>
  );
}

export default ButtonCopy;
