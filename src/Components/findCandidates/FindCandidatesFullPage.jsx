import {EmployerJobPostCard} from "./EmployerJobPostCard.jsx";
import {CandidateSearch} from "./CandidateSearch.jsx";
import {AppliedCandidateCard} from "./AppliedCandidateCard.jsx";
import {v4 as uuid} from "uuid";
import {JobPostFullRequirements} from "./JobPostFullRequirements.jsx";
import {AppliedCandidateCredentials} from "./AppliedCandidateCredentials.jsx";
import {useState} from "react";

export const FindCandidatesFullPage = () => {
    const [page, setPage] = useState("main-page")

    const [jobPosts, setJobPosts] = useState(
        [
            {jobTitle: "Software Engineer", priceRange: "₦ 500,000 - ₦ 700,000", date: "3 days ago", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "REMOTE", state: "Edo", country: "Nigeria"},
            {jobTitle: "Electrical Engineer", priceRange: "₦ 300,000 - ₦ 500,000", date: "4 days ago", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "HYBRID", state: "Lagos", country: "Nigeria"},
            {jobTitle: "Lawyer", priceRange: "₦ 100,000 - ₦ 150,000", date: "5 days ago", jobDescription: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.", jobType: "ON-SITE", state: "Rivers", country: "Nigeria"}
        ]
    )

    const [applicants, setApplicants] = useState(
        [
            {applicantName: "Charles Obi", applicantTitle: "Java developer"},
            {applicantName: "Victory Blaze", applicantTitle: "Java developer"},
            {applicantName: "Chidiogo Ikejuba", applicantTitle: "Java developer"},
            {applicantName: "Sunday Peters", applicantTitle: "Java developer"},
            {applicantName: "Emma Ibe", applicantTitle: "Java developer"},
            {applicantName: "Francis Ezeanya", applicantTitle: "Java developer"}
        ]
    )

    return (
        <div className="bg-white flex flex-col items-stretch">
            <div className="self-center flex w-full max-w-[1001px] flex-col items-center mt-6 mb-16 px-5 max-md:max-w-full max-md:mb-10">

                { page === "main-page" &&
                    <div className="self-center flex w-full max-w-[1001px] flex-col items-center mt-6 mb-16 px-5 max-md:max-w-full max-md:mb-10">
                        <CandidateSearch />

                        <div className="text-black text-xl font-medium leading-7 tracking-normal self-stretch whitespace-nowrap -mr-5 mt-5 max-md:max-w-full">
                            Company’s employment opportunities
                        </div>

                        <div className="self-stretch ml-0 mr-0 mt-4 max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col max-w-[42%]">
                                    { jobPosts.map(
                                        jobPosts => (

                                            <EmployerJobPostCard
                                                key={uuid()}
                                                jobTitle={jobPosts.jobTitle}
                                                priceRange={jobPosts.priceRange}
                                                jobDescription={jobPosts.jobDescription}
                                                jobType={jobPosts.jobType}
                                                date={jobPosts.date}
                                                state={jobPosts.state}
                                                country={jobPosts.country}
                                                handlePage={() => (setPage("full-job"))}
                                            />

                                        )
                                    )
                                    }
                                </div>

                                <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                        <div className="max-md:max-w-full">
                                            <div key={uuid()} className="gap-5 flex flex-wrap max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                { applicants.map(
                                                    applicants => (
                                                        <AppliedCandidateCard
                                                            applicantName={applicants.applicantName}
                                                            applicantTitle={applicants.applicantTitle}
                                                            handlePage={() => (setPage("applicant"))}
                                                        />
                                                    )
                                                )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                { page === "full-job" &&
                    <>
                        <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                            <JobPostFullRequirements/>
                        </div>
                    </>
                }

                { page === "applicant" &&
                    <>
                        <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
                            <AppliedCandidateCredentials/>
                        </div>
                    </>
                }

            </div>
        </div>
    );
}


