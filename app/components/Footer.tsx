// import State from "./State"

import Image from "next/image"
import style from "styled-jsx/css"
export default function Footer() {
    return (

        <div className=" w-screen h-screen md:min-w-[768px] bg-[url(/G.House.jpg)] bg-no-repeat bg-cover gap-2 ">
            <div className="w-screen h-screen  bg-zinc-100 bg-opacity-80 flex flex-col md:flex md:flex-row">
                <div className="w-2/3 h-auto md:h-full ml-5 md:w-1/2 md:-mx-5 xl:mx-32 md:ml-3 ">
                    <h1 className="text-blue-900 md:text-6xl text-4xl font-extrabold">Governor Sindh</h1>
                    <h3 className="text-blue-700 text-2xl md:text-4xl">Kamran khan Tesori</h3>
                    <p className="text-sky-500 text-3xl md:text-4xl font-bold mt-4">Certified Cloud
                        Applied Generative AI
                        Engineer <br /> (GenEng) </p>
                    <h3 className="text-blue-900 text-2xl md:text-4xl xl:mb-10 mt-4 font-extrabold">Earn up to $5,000 / month
                        Now admissions are open in Hyderabad</h3>
                    <button className="bg-blue-700 mb-5 w-40 h-12 items-center rounded mt-6 ml-10 text-xl text-white ">Apply Now</button>
                </div>
                <div className="w-fit h-auto md:w-1/2 md:h-auto md:flex md:flex-row md:relative md:overflow-hidden xl:overflow-visible md:-right-8 xl:-left-32 ">
                    <Image className="md:absolute md:-right-52 md:min-w-[700px] h-auto "
                        src="/kamran Tesori.png"
                        alt="tesori bhai"
                        height={1212}
                        width={1600}
                    ></Image>

                </div>
            </div>
        </div>

    )
}



