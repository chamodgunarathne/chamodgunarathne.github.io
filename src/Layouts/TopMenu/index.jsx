import { twMerge } from "tailwind-merge";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";

const Main = (props) => {
  return (
    <div>
      <Navbar className="fixed top-0 left-0 right-0 z-10" />
      <div className="h-[50px]"></div>
      <div
        className={twMerge([
          "content transform duration-500 ease-in-out",
          props.className,
        ])}
      >
        {props.children}
        {props.footer && (
          <div className=" mt-10">
            <Footer  className=" left-0 right-0"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
