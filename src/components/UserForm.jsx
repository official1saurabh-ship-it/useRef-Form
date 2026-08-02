import React from 'react'

const UserForm = ({ setFormData, formData, user, setUser, error, setError }) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {};

        if (!formData.image) {
            newErrors.image = "Image URL is required";
        }

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!formData.subName) {
            newErrors.subName = "Sub Name is required";
        }

        if (!formData.designation) {
            newErrors.designation = "Designation is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }
        setUser([...user, formData])
        setError({});
        setFormData({
            image: "",
            name: "",
            subName: "",
            designation: "",
        })
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200 space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800">
                Create User
            </h2>

            <input

                onChange={handleChange}
                type="text"
                name="image"
                value={formData.image}
                placeholder="Enter your image URL"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {error.image && <p className="text-red-500">{error.image}</p>}
            <input

                onChange={handleChange}
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
            <input

                onChange={handleChange}
                type="text"
                name="subName"
                value={formData.subName}
                placeholder="Enter your sub name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {error.subName && <p className="text-red-500">{error.subName}</p>}
            <input

                onChange={handleChange}
                type="text"
                name="designation"
                value={formData.designation}
                placeholder="Enter your designation"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {error.designation && <p className="text-red-500">{error.designation}</p>}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Create User
            </button>
        </form>
    )
}

export default UserForm