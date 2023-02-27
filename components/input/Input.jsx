export default function Input(props) {
  
  return (
    <div className="flex flex-row justify-center items-center">
      {props.children}
      <input
        className="h-10 mr-2 px-2 bg-bg-white border-[1px] border-txt-gray rounded-md"
        type={props.type ? props.type : "text"}
        placeholder={props.text}
      />
    </div>
  );
}
