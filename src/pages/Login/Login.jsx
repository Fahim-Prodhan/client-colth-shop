

const Login = () => {
    return (
        <div>
            <div className="flex items-center ">
                <div className="w-full max-w-lg mx-auto p-4  rounded-lg ">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">Login</h1>
                    </div>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" className="px-4 py-2 rounded-md border border-black  focus:border-2 h-[47px]" required />
                        </div>
                        <div className="flex flex-col relative">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" id="password" className="px-4 py-2 rounded-md border border-black  focus:border-2 h-[47px]" required />
                            <a href="#" className="absolute mt-2 right-2 top-1/2 transform -translate-y-1/2 text-sm text-[#5b9bbe] ">Forgot your password?</a>
                        </div>


                        <div className="flex space-x-4 items-center justify-between">
                            <button type="submit" className="inline-block bg-[#343a40] px-4 py-2  text-white font-medium ">LOGIN</button>
                            <a href="#" className="text-sm text-[#5b9bbe] ">Create account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;