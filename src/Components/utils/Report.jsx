
export const Report = () => {
    return (
        <div className="absolute shadow-lg max-w-[16.5rem] right-[0] justify-center items-center items-stretch bg-white flex flex-col">
            <header className="cursor-pointer hover:bg-red-500 rounded justify-between items-center bg-white flex w-full gap-2.5 w-[14.5rem] p-4 max-md:px-5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/808552ad2590ca4c1ab89f84bd17e7ec4a84f7947db1e4b614c4679d87eeace4?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                    alt="Logo"
                />
                <div className="text-gray-900 text-xl leading-7 tracking-normal self-stretch grow whitespace-nowrap">
                    Report Employer
                </div>
            </header>
            {/*<div className="cursor-pointer rounded hover:bg-red-500 px-2 justify-between items-center bg-white flex gap-2.5 py-2 max-md:px-5">*/}
            {/*    <img*/}
            {/*        loading="lazy"*/}
            {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/49fb60f2d81ba6a531e713891c35c067062821006bd3fadb5e8938a4aac657f8?apiKey=ecb6ce71cdf4467d9335c2f7dc302a16&"*/}
            {/*        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"*/}
            {/*        alt="Logo"*/}
            {/*    />*/}
            {/*    <div className="text-gray-900 text-xl leading-7 tracking-normal self-stretch grow whitespace-nowrap">*/}
            {/*        Not interested*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}