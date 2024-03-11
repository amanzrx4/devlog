export default function Navbar() {
  return (
    <div className="bg-[#4d4d4d] flex justify-between w-full text-white p-2 items-center">
      <div>LOGO</div>
      <div className="flex gap-2 items-center">
        <button className="bg-red-400 p-2 py-1 rounded-lg hover:bg-red-500">
          {" "}
          sign up
        </button>
        <button className="bg-red-400 p-2 py-1 rounded-lg hover:bg-red-500">
          log in
        </button>
        <button>s</button>
        <button>h</button>
      </div>
    </div>
  )
}
