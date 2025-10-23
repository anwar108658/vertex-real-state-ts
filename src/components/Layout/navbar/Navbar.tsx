import logo from "../../../assets/logo.png"
const Navbar = () => {
  return (
    <div className="">
        <header className="container mx-auto p-2">
            <div>
                <img src={logo} className="w-[150px]" alt="" />
            </div>
        </header>
    </div>
  )
}

export default Navbar