import React from "react";
import { extraServices } from "../../../data/extraServicesData";
import { Icon } from "@iconify/react";

const ExtraService = () => {
  return (
    <div className="extra-service relative z-10 bg-white flex items-center justify-center">
      <div className="container">
        <div className="headline flex flex-col items-center justify-center gap-2.5 pt-[60px] pb-5 after:content-[''] after:relative after:block after:bg-red-500 after:w-10 after:h-0.5 after:rounded after:mt-2.5 sm:pt-10">
            <div className="title text-center  font-bold text-gray-800 text-5xl">Extra Services</div>
                <div className="description  text-center font-normal text-gray-800 text-xl">
                    Enhance your journey with our additional services, tailored to your
                    travel needs.
                </div>
            </div>
        <div className="content grid grid-cols-5 gap-5 py-5 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {extraServices.map((service) => (
            <div key={service.id} className="extra-service-card relative overflow-hidden bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out ">
                <div
                className="extra-service-header bg-cover bg-center text-center text-white relative h-[340px] flex flex-col items-center justify-end transition-all duration-300 ease-in-out hover:translate-y-[-100px]"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
                >
                    <div className="extra-service-icon bg-white rounded-full w-[60px] h-[60px] transform translate-y-5 flex items-center justify-center">
                        <Icon
                            icon={service.icon}
                            className="extra-service-icon-content  text-4xl bg-red-700 rounded-full w-[50px] h-[50px] p-2.5 text-white"
                        />
                    </div>
                    <h3 className="py-10  font-bold  w-full bg-white text-gray-800 xxl:text-base xl:text-xl lg:text-l md:text-l sm:text-base">{service.title}</h3>
                </div>
                <div className="extra-service-details absolute bottom-[-100%] w-full bg-white px-5 py-1 text-center transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-2 group-hover:bottom-[5px] parent-hover:bottom-[5px]">
                    <p className="text-sm text-gray-800 leading-tight xl:text-xs xl:text-sm lg:text-sm md:text-sm sm:text-sm">{service.description}</p>
                    <a href={service.link} className="details-button inline-block text-sm py-2 px-4 bg-red-700 text-white rounded transition-colors duration-300 border border-transparent hover:bg-white hover:text-red-700 hover:border-red-700">
                     Details
                    </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraService;
