import { Link } from "react-router-dom";
import './RoundedStyle.css'

const Login = () => {
    return (
        <div className="grid lg:grid-cols-2  md:grid-cols-2 container mx-auto ">
                   <div className="w-full max-w-md rounded-md  sm:p-8 text-gray-900">
	<h2 className=" text-3xl font-semibold text-center">Get Started Now</h2>
	<p className="text-sm mb-3 mt-2 text-center text-gray-400">Enter your credentials to access your account
	</p>
	<div className=" space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr className="w-full text-gray-400"/>
		<p className="px-3 text-gray-400">OR</p>
		<hr className="w-full text-gray-400"/>
	</div>
	<form  action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label  className="block text-sm">Name</label>
				<input type="text" name="text" id="text" placeholder="Enter Name" className="w-full px-3 py-1 border rounded-md border-gray-300 text-gray-900 focus:border-violet-400"  />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label  className="text-sm">Email</label>
					
				</div>
				<input type="email" name="email" id="email" placeholder="Enter Email" className="w-full px-3 py-1 border rounded-md border-gray-300 text-gray-900 focus:border-violet-400" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label  className="text-sm">Category</label>
					
				</div>
				<div className="space-y-2 w-full px-3 py-1 border rounded-md border-gray-300 text-gray-900 focus:border-violet-400" >

				<select className="select select-sm  w-full max-w-xl">
  <option  disabled selected>Select Category</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>

</div>
			</div>
			
			<div className="space-y-2">
				<div className="flex justify-between">
					<label  className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="Enter Password" className="w-full px-3 py-1 border rounded-md border-gray-300 text-gray-900 focus:border-violet-400" />
			</div>
		</div>
		<Link to='/dashboard'>
		<button type="button" className="w-full px-8 py-3 mt-6 font-semibold rounded-md text-slate-100 bg-teal-500">LogIn</button></Link>
		
		<p>Have an account <a href="" className="text-cyan-400">Sign in</a></p>
	</form>
</div>

<div className="rounded-style  ">
	
	<img className="w-full h-full " src="https://img2.cgtrader.com/items/3189949/d2d65d62a2/large/social-media-icons-3d-model-obj-fbx-blend.jpg" alt="" />
</div>
        </div>
    );
};

export default Login;