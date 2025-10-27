import logo from "../../../assets/logo.png"
import {navBarData} from "../../../data/Data"
import  TsButton from "../../common/TsButton"
const Navbar = () => {
  return (
    <div className="">
        <header className="container mx-auto flex justify-between p-2">
            <div>
                <img src={logo} className="w-[150px] shadow-sm shadow-yellow-200 rounded" />
            </div>
            <nav className="flex items-center">
              {
                navBarData.map((item)=>(
                  <TsButton size="large"className="text-[.9rem]" colorVariant="light" key={item.id}>
                    {item.title}
                  </TsButton>
                ))
              }
            </nav>
        </header>
    </div>
  )
}

export default Navbar