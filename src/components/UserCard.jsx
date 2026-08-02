import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div className='grid grid-cols-3'>
            {user.map((item) => {
                return <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
                    <img
                        src={item.image}
                        alt="User"
                        className="w-full h-56 object-cover"
                    />

                    <div className="p-5">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {item.name}
                        </h2>

                        <p className="mt-2 text-lg text-blue-600 font-medium">
                            {item.subName}
                        </p>

                        <p className="mt-3 text-gray-600">
                            {item.designation}
                        </p>

                        <div className="mt-5 flex gap-3">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200">
                                Update
                            </button>

                            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition duration-200">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            })}</div>

    )
}

export default UserCard