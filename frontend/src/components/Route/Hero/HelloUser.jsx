import React from 'react';

const HelloUser = ({ username }) => {
    return (
        <div className="bg-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <span className="text-2xl font-bold text-gray-900">Hello, {username}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelloUser;
