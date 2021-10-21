import Navbar from "./nav";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faBell } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/avatar";
// import Footer from './footer'

export default function Layout({ children, title }) {
  return (
    <div className="flex">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="flex-1 min-h-screen bg-gray-200">
        <div className="w-full py-6 px-6 bg-white border-b border-gray-300 flex justify-between items-center">
          <h2 className="text-lg font-bold text-blue-800 pl-12 lg:pl-0">
            {title}
          </h2>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-xl cursor-pointer ml-4"
            />
            <FontAwesomeIcon
              icon={faBell}
              className="text-xl cursor-pointer ml-4"
            />
            <div className="relative ml-4">
              <Avatar
                image="https://picsum.photos/id/237/200/200.jpg"
                className="cursor-pointer"
                status="online"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-xl py-12 px-6">
          <div className="mb-12">{children}</div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
