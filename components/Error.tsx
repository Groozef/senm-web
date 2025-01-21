import React from "react";

const Error: React.FC<{ message?: string }> = ({ message = "Something went wrong." }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-3xl font-bold text-red-500 mb-4">Error 404</h1>
            <p className="text-gray-700 mb-6">{message}</p>
            <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Try again
            </button>
        </div>
    );
};

export default Error;
