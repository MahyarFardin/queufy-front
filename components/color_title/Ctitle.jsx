export default function Ctitle(props) {
  return (
    <div className="w-fit h-4 m-10 rounded-full">
      {props.children}
      <h1 className="title text-4xl text-center dot-pattern">
        <div className="h-[18px] px-3 font-bold rounded-full bg-light-blue flex flex-row justify-center items-center">
          {props.text}
        </div>
      </h1>
    </div>
  );
}
