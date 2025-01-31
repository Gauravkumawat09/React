import React from "react";

const App = () => {
    return (
        <div>
            <div className="w-72">
                <h1>Product Listing</h1>
                <div className="w-50">
                    <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image.jpg"/>
                    <p>This is a gaming console</p>
                </div>
                <div>
                    <button> Add to Cart </button> <br/>
                    <button>Remove</button>
                </div>
            </div>

        </div>
    )
} 

export default App;