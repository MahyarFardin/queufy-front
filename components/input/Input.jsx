export default function Input(props) {
  return (
    <div className="h-auto w-full flex flex-row justify-center items-center">
      {props.children}
      <input
        className="h-10 w-full px-2 bg-bg-white border-[1px] border-txt-gray rounded-md m-2"
        type={props.type ? props.type : "text"}
        placeholder={props.text}
      />
    </div>
  );
}
