import React from "react";

const App = () => {
    return (
        <div>
            <div className="w-72 h-96 bg-gradient-to-r from-indigo-500 to-indigo-900 m-10 rounded-2xl">
                <h1 className="text-center text-white text-2xl mb-3 p-6">Product Listing</h1>
                    <img className="rounded-xl w-86 mb-3 bg-contain" src="https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image.jpg"/>
                    <p className="text-center text-white mb-3">This is a gaming console with a 4K resolution and 16GB of RAM </p>
                <div>
                    <button> Add to Cart </button> <br/>
                    <button>Remove</button>
                </div>
            </div>
                {/* //6 feburary */}
        </div>
    )
} 

export default App;