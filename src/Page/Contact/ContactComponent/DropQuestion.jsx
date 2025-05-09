import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import { FaRegUser } from "react-icons/fa6";
import { FaPhone } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';

const DropQuestion = () => {
    return (
        <div>
            <div className="w-10/12 lg:w-130 mx-auto mt-10 border border-gray-300 rounded-2xl shadow p-5">
                <div className="mb-5">
                    <h1 className='text-4xl font-extrabold'>Leave a Question</h1>
                    <p className='text-sm text-gray-500'>Fill-up The Form and Message us of your amazing question</p>
                </div>
                <form className='' action="">
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className='flex flex-col justify-center items-center gap-7'
                    >
                        <TextField
                            className="w-11/12 mx-auto"
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FaRegUser />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className="w-11/12 mx-auto"
                            id="outlined-basic"
                            label="Your Email"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <MdOutlineEmail />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className="w-11/12 mx-auto"
                            id="outlined-basic"
                            label="Your Phone"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FaPhone />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className="w-11/12 mx-auto"
                            id="outlined-basic"
                            label="Your Question"
                            variant="outlined"
                            multiline
                            rows={4}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <TiMessages />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <button className='btn w-11/12 mx-auto -mt-5 bg-[#41bfb8] text-white text-lg rounded-lg hover:bg-[#F79952] duration-700'>Submit Message</button>
                    </Box>

                </form>
            </div>
        </div>
    );
};

export default DropQuestion;

