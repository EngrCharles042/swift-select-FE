export const AppliedCandidateCredentials = ({applicantName, applicantTitle}) => {
    return (
        <div className="bg-white flex flex-col pb-12">
            <div className="items-stretch shadow-lg bg-white self-center flex w-full max-w-[1000px] flex-col mt-14 px-6 py-4 rounded-xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src="src/assets/images/sundaysvg.svg"
                        className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/147eda17-e2f2-405a-be48-03d0a9c34711?"
                        className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                </div>
                <div className="text-black text-2xl font-medium leading-9 tracking-normal whitespace-nowrap mt-3 self-start">
                    {applicantName}
                    Charles Obi
                </div>
                <div className="items-center flex w-[248px] max-w-full gap-1 self-start">
                    <div className="text-black text-lg font-light leading-6 tracking-normal grow whitespace-nowrap my-auto">
                        {applicantTitle}
                        Java Developer at{" "}
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f0eefb8-7689-4a2a-bb13-6139b7edc6d2?"
                        className="aspect-square object-contain object-center w-8 fill-[url(<path-to-image>),lightgray_50%_/_contain_no-repeat] overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                </div>
                <div className="justify-between items-stretch flex w-full gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                    <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                        <div className="items-stretch rounded bg-gray-100 flex grow basis-[0%] flex-col justify-center px-2 py-1">
                            <div className="flex gap-1 items-start max-md:justify-center">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ba7eacb-60ba-4c89-980d-866f55fcf786?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                                <div className="text-blue-500 text-base font-medium leading-6 tracking-normal grow shrink basis-auto">
                                    Resume-charlesobicv.pdf
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7935d99c-50d5-4815-a0f7-ea924d6726e2?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                            </div>
                        </div>
                        <div className="items-stretch rounded bg-gray-100 flex grow basis-[0%] flex-col justify-center px-2 py-1">
                            <div className="flex gap-1 items-start max-md:justify-center">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c979c26-6fac-4d13-9ddf-de307df90d2d?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                                <div className="text-blue-500 text-base font-medium leading-6 tracking-normal grow shrink basis-auto">
                                    Coverletter-charlesobicl.pdf
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44f17217-af68-4c33-9946-22e81373e2b9?"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="items-stretch self-center flex gap-1.5 my-auto max-md:justify-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f5dc188-7624-4f80-b8ba-60b59239ffa0?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/38a6f3f6-948d-4876-b575-539b27f862cf?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9af3992e-a560-48f6-a008-94d38267c31a?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                    </div>
                </div>
                <div className="justify-between items-stretch flex w-[219px] max-w-full gap-3.5 mt-6 px-px self-start">
                    <div className="justify-between rounded bg-blue-100 flex gap-2 px-2.5 py-2 items-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0915df1d-65aa-4c06-97bd-b9adaec6d2a8?"
                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-blue-500 text-xs leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                            Send Email
                        </div>
                    </div>
                    <div className="justify-between rounded bg-emerald-100 flex gap-2 px-2.5 py-2 items-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8264011-9231-4a18-a16a-ff0748a0a37f?"
                            className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-green-500 text-xs leading-4 tracking-normal self-stretch grow whitespace-nowrap">
                            Message
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-2.5 max-md:max-w-full">
                Education
            </div>
            <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                Covenant University Ogun, Nigeria
                <br />
                B.Sc. in Accounting, Second Class Upper Honors
                <br />
                Sept 2017 - Oct 2021
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-3.5 max-md:max-w-full">
                WORK EXPERIENCE
            </div>
            <div className="text-black text-base font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                <span className="font-semibold">Decagon, Lagos. </span>
                <span className="font-medium">
          {" "}
                    <br />
          UI/UX Designer Intern <br />
          May 2023 - Oct 202
        </span>
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase mt-3.5 max-md:max-w-full">
                SKILLS
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal mt-3.5 max-md:max-w-full">
                <ul>
                    <li>
                        Microsoft Office (Word, Excel, Powerpoint), Communication skills,
                        Graphic design, User interface (UI) design, Wireframing,
                        Prototyping, Front-end development (in-view), Teamwork,
                        Organizational skills, Research and Analysis, Creativity,
                        Leadership.
                    </li>
                </ul>
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal uppercase self-start whitespace-nowrap mt-3.5 max-md:max-w-full">
                CERTIFICATIONS
            </div>
            <div className="text-black text-lg font-medium leading-6 tracking-normal mt-3.5 mb-16 max-md:max-w-full max-md:mb-10">
                <ul>
                    <li>Foundations of User Experience (UX) Design.</li>
                    <li>Start the UX Design Process: Empathize, Define and Ideate.</li>
                    <li>Build Wireframes and Low-Fidelity Prototypes.</li>
                </ul>
            </div>
        </div>
    );
}


