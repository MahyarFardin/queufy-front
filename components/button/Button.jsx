export default function Button(props) {
  return (
    <button
      className={`rounded-full border-[1px] border-bg-white text-bg-white ${props.style}`}
    >
      {props.text}
    </button>
  );
}
