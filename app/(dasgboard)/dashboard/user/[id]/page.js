import React from 'react';

const users = [
    { id: 1, name: 'Ran vijay bulbheer' },
    { id: 2, name: 'Arjun Reddy' },
    { id: 3, name: 'Adithya Varma' },
    { id: 4, name: 'Kabir Singh' }
];

const Page = async ({ params }) => {
    const id = parseInt(params.id); // Convert the string id to a number
    const user = users[id - 1]; // Subtract 1 to account for zero-based index

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
           
            <h1>User Name: {user.name}</h1>
        </div>
    );
};

export default Page;
