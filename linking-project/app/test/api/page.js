/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';

const page = () => {
    const [users, setUsers] = React.useState([]);
    const f = async () => {
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        setUsers(json.data);
    };
    React.useEffect(() => {
        f();
    }, []);


    return (
        <div className='min-w-full flex flex-col items-center justify-center align-middle'>
            <h1 className='text-3xl text-blue-700 font-bold underline underline-offset-8 w-full h-full text-center'>Testing a sample api!</h1>

            {/* <div className="max-w-lg flex mt-6 flex-shrink flex-wrap"> */}
            <div className="max-w-lg mt-6 grid grid-rows-3 grid-flow-col gap-4">
                {users.length &&
                    users.map((user) => {
                        return (
                            <div className='flex-1 m-8 align-middle justify-center items-center w-full space-x-10' key={user.id}>
                                <div className='flex'>
                                    <p>
                                        <strong>{user.first_name}</strong>
                                        <p>{user.email}</p>
                                    </p>
                                    <img className='rounded-full w-16 ml-2 mr-2' key={user.avatar} src={user.avatar} />
                                </div>
                            </div>
                        );
                    })}
                    {!users.length && (
                        <div>Loading...</div>
                    )}
            </div>
        </div>
    )
}

export default page