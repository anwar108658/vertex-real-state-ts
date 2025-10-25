import logo from "../../../assets/logo.png"
import  TsButton from "../../common/TsButton"
const Navbar = () => {
  return (
    <div className="">
        <header className="container mx-auto p-2">
            <div>
                <img src={logo} className="w-[150px] shadow-sm shadow-yellow-200 rounded" />
                <TsButton size="medium" colorVariant="light" fontSize="text-[.9rem]">Click Me</TsButton>
            </div>
        </header>
    </div>
  )
}

export default Navbar