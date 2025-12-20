function Square() {
  return (
    <button className="bg-white border border-gray-400 h-15 w-15 m-1 leading-9 text-lg">
      X
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
