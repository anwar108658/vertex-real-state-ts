import * as FaIcons from "react-icons/fa";
import * as CiIcons from "react-icons/ci";
import logo from "../../../assets/logo.png"
import {navBarData} from "../../../data/Data"
import  TsButton from "../../common/TsButton"
const Navbar = () => {
  return (
    <div className="">
        <header className="container mx-auto flex justify-between p-2">
            <div>
                <img src={logo} className="w-[120px] shadow-sm shadow-yellow-200 rounded" />
            </div>
            <nav className="flex items-center justify-center">
              <div className="flex items-center">
                {navBarData.map((item) => (
                  <TsButton size="large" className="text-[.9rem]" colorVariant="gray" key={item.id}>
                    {item.title}
                  </TsButton>
                ))}
              </div>
              <TsButton size="large" icon={<CiIcons.CiMenuBurger strokeWidth={"2px"} size={18} />} className="mx-4 text-[.8rem] border-[.1rem] border-gray-300" colorVariant="TBlack"/>
              <TsButton size="large" className="text-[.8rem] font-semibold border-[.1rem] border-gray-300" colorVariant="TBlack" >
                  Sign up or log in
              </TsButton>
            </nav>
        </header>
    </div>
  )
}

export default Navbar