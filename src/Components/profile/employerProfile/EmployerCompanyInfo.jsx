import * as React from "react";
import {useState} from "react";


export const EmployerCompanyInfo = ({userData}) => {
    const [companyInfo, setCompanyInfo] = useState({
        companyName: "",
        companyDescription: "",
        address: "",
        country: "",
        state: "",
        industry: "",
        companyType: "",
        numberOfEmployees: "",
        website: "",
        facebook: "",
        instagram: "",
        twitter:  ""
    })



    const handleChange = (e) => {
        setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value })
    }

    return(
        <form className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-end flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4">
                    Company's Name
                </div>
                <input
                    type="text"
                    name="companyName"
                    value={userData.companyName}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Description
                </div>
                <input
                    type="text"
                    name="companyDescription"
                    value={userData.companyDescription}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Address
                </div>
                <input
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Country
                </div>
                <input
                    type="text"
                    name="country"
                    value={userData.country}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    State
                </div>
                <input
                    type="text"
                    name="state"
                    value={userData.state}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Industry
                </div>
                <input
                    type="text"
                    name="industry"
                    value={userData.industry}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company Type
                </div>
                <input
                    type="text"
                    name="companyType"
                    value={userData.companyType}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Number of Employees
                </div>
                <input
                    type="number"
                    name="numberOfEmployees"
                    value={userData.numberOfEmployees}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Website
                </div>
                <input
                    type="text"
                    name="website"
                    value={userData.website}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Company's Facebook Profile
                </div>
                <input
                    type="text"
                    name="facebook"
                    value={userData.facebook}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Instagram
                </div>
                <input
                    type="text"
                    name="instagram"
                    value={userData.instagram}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <div className="relative top-2 text-blue-500 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit px-1 mx-4 mt-5">
                    Twitter
                </div>
                <input
                    type="text"
                    name="twitter"
                    value={userData.twitter}
                    onChange={handleChange}
                    className="text-black text-base leading-6 tracking-normal whitespace-nowrap rounded border border-[color:var(--Blue-1,#2F80ED)] self-stretch px-4 py-2.5 border-solid max-md:max-w-full"
                />

                <input
                    type="submit"
                    name="submit"
                    value="Save Changes"
                    className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-fit max-w-full mt-8 px-4 py-2 rounded-xl self-end cursor-pointer"
                />
            </div>
        </form>
    );
}