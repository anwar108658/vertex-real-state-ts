import * as CiIcons from "react-icons/ci";
import logo from "../../../assets/logo.png"
import {navBarData} from "../../../data/Data"
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <div className="">
        <header className="container mx-auto flex justify-between p-3">
            <div>
                <img src={logo} className="w-[120px] shadow-sm shadow-yellow-200 rounded" />
            </div>
            <nav className="flex items-center justify-center">
              <div className="flex items-center flex-wrap">
                {navBarData.map((item) => (
                  <Button variant={"outline"} className="text-[.9rem] border-0" size={"sm"}>
                    {item.title}
                  </Button>
                ))}
              </div>
              <Button className="mx-4 text-[.8rem]" variant={"outline"} >
                <CiIcons.CiMenuBurger strokeWidth={"1px"} size={18} />
              </Button>
              <Button  className="text-[.8rem] font-semibold" variant={"outline"}>
                  Sign up or log in
              </Button>
            </nav>
        </header>
    </div>
  )
}

export default Navbar