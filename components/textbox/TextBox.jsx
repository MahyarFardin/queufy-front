export default function TextBox(props) {
  return (
    <textarea
      placeholder={props.text}
      className="w-[96%] m-2 px-2 bg-bg-white border-[1px] border-txt-gray rounded-md"
      rows="5"
      OnChange={props.onChange}
    />
  );
}
