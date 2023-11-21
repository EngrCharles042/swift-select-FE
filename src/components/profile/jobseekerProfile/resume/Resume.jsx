import * as React from "react";
import {useDropzone} from "react-dropzone";
import {useState} from "react";

export const Resume = () => {

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);

            // Call your backend API endpoint to upload files

        },
    });

    return(
        <form className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <div  className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-gray-300 text-sm leading-5 tracking-normal whitespace-nowrap flex justify-start items-stretch bg-white self-start w-fit ">
                    drop your resume in the box below
                </div>

                <div {...getRootProps()} className="w-[30vw] max-h-100 border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4 mt-4 text-white text-center">
                    <input {...getInputProps()} />
                    <p className="text-black">Drop your files here or </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {uploadedFiles.map((file) => (
                            <li key={file.name} style={{ marginBottom: '8px', padding: '4px', backgroundColor: '#888888', borderRadius: '4px' }}>
                                {file.name}
                            </li>
                        ))}
                    </ul>
                    <p className="text-blue-500 cursor-pointer">browse</p>
                    <p className="text-gray-300">Maximum size is: 5MB</p>
                </div>

                <input
                    type="submit"
                    name="submit"
                    value="Save Changes"
                    className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-blue-500 w-[145px] max-w-full mt-8 px-4 py-2 rounded-xl self-end cursor-pointer"
                />
            </div>
        </form>
    );
}