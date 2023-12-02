import {CreateJobPostNav} from "./CreateJobPostNav.jsx";
import {useState} from "react";
import {JobInformation} from "./JobInformation.jsx";
import {PostQualifications} from "./PostQualifications.jsx";
import {PostNewJobContactDetailsPage} from "./PostNewJobContactDetailsPage.jsx";

export const CreateJobPost = () => {
    const [progress, setProgress] = useState(1);

    const handleStep1 = () => {
        setProgress(1);
    }

    const handleStep2 = () => {
        setProgress(2);
    }

    const handleStep3 = () => {
        setProgress(3);
    }

    return(
        <>
            <CreateJobPostNav
                p1={handleStep1}
                p2={handleStep2}
                p3={handleStep3}
            />

            { progress === 1 && <JobInformation/> }x
            { progress === 2 && <PostQualifications/> }
            { progress === 3 && <PostNewJobContactDetailsPage/> }
        </>
    )
}