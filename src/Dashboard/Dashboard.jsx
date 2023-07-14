import { useEffect, useState } from "react";
import SmallManu from "../SmallManu/SmallManu";
import './SmaalHandle.css'
const Dashboard = () => {
    const isSmallScreen = window.innerWidth < 1024;
    const isOnlySmallScreen = window.innerWidth <= 1024 && window.innerWidth >= 0;
    const [user, setUserData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('.../../../../public/data.json');
            const data = await response.json();
            setUserData(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
   
    return (
        <>
        <div className="small-menu" >
        {!isOnlySmallScreen && <SmallManu></SmallManu>}
        </div>
         
       
    <div className="grid grid-cols-6 gap-4 "style={{backgroundColor: '#F1F1F1'}}>
        {/* aside bar */}
        {!isSmallScreen &&
        
        <div className="flex flex-col hidden lg:block h-full p-3 w-60 bg-white dark:text-gray-100">
	<div className="space-y-3">
		<div className="flex items-center justify-between mb-9">
			<div className="flex  items-center p-2  space-x-8 justify-self-end">
            <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllS99OFJOn864-rv5PM7MKEBEFpLi4jE_LQ&usqp=CAU" />
  </div>
</div>
		<div>
			
		<span>Jhon Hayton</span>
		</div>
	</div>
		</div>
		<div className="relative">
			<span className="absolute inset-y-0 left-0 flex items-center py-4">
				<button type="submit" className="p-2 focus:outline-none focus:ring">
					
				</button>
			</span>
			<p className="ml-3">Menu</p>
		</div>
		<div className="flex-1">
			<ul className="pt-2 ml-6 pb-4 space-y-1 text-sm">
				<li className="rounded-sm py-2" >
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
						</svg>
						<span>Dashboard</span>
					</a>
				</li>
				<li className="rounded-sm py-2">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <i className="fa-regular fa-user"></i>
						<span>Creators</span>
					</a>
				</li>
				<li className="rounded-sm py-2" style={{
                    background:'#2ab4b1',
                    padding:'2px 8px',
                    borderRight:'10px',
                    color:'white'
                }}>
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<i className="fa-solid fa-circle-check"></i>
						<span>Active Deals</span>
					</a>
				</li>
				<li className="rounded-sm py-2">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<i className="fa-solid fa-graduation-cap"></i>
						<span>Complete Deals</span>
					</a>
				</li>
				<li className="rounded-sm dark:bg-gray-800 dark:text-gray-50 py-2 ">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <i className="fa-solid fa-bell"></i>
						<span>Notification</span>
                        <div className="badge " style={{background:'#7EF59C'}}>5</div>
					</a>
				</li>
				<li className="rounded-sm py-2">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
							<path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
							<path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
						</svg>
						<span> Profile Settings</span>
					</a>
				</li>
				
			</ul>
		</div>
	</div>
	<div className="flex mt-28 items-center p-2  space-x-8 justify-self-end">
    <i className="fa-solid fa-right-from-bracket"></i>
		<div>
			
						<span>Logout</span>
		</div>
	</div>
</div>
        
        }
        
        {/* table  start*/}
          <div className="col-span-6 lg:col-span-5 ">
          <div className=" mt-2  mx-12">
              <div className="" style={{
                display: 'flex',
                justifyContent:' space-between',
                alignItems:'center'
              }}>
                <div className="">
                    <p className="font-semibold">AdvertenceMeant performance overview</p>
                </div>
              <div className="">
                <button  style={{background:'white', padding:'8px 16px', border:'1px solid #ddd'}} className="mr-6 mb-4">Previous Year</button>
                <button style={{background:'#2ab4b1', padding:'8px 16px', }} className=" rounded text-white">View All Dashboard</button>
              </div>
              </div>
           </div>
           <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 mb-6 mt-4 gap-12 mx-16 text-center">
            <div style={{
              borderRight: '2px solid gainsboro',
              padding: '0px 13px',
              margin: '10px -16px',
            }}  >
                <p className="text-slate-500">AdvertenceMeant</p>
                <h2 className="font-bold text-lg">$100.00</h2>
                <p className="bg-emerald-200 rounded py-1"><i className="fa-solid fa-caret-up"></i>+10.5</p>
            </div>
            <div style={{
              borderRight: '2px solid gainsboro',
              padding: '0px 13px',
              margin: '10px -16px',
            }} >
                <p className="text-slate-500">New Creators</p>
                <h2 className="font-bold text-lg">11</h2>
                <p className="bg-emerald-200 rounded py-1"><i className="fa-solid fa-caret-up"></i>+10.5</p>
            </div>
            <div style={{
              borderRight: '2px solid gainsboro',
              padding: '0px 13px',
              margin: '10px -16px',
            }} >
                <p className="text-slate-500">New post</p>
                <h2 className="font-bold text-lg">490</h2>
                <p className="bg-emerald-200 rounded py-1"><i className="fa-solid fa-caret-up"></i>+10.5</p>
            </div>
            <div style={{
              borderRight: '2px solid gainsboro',
              padding: '0px 13px',
              margin: '10px -16px',
            }} >
                <p className="text-slate-500">Deals Completes</p>
                <h2 className="font-bold text-lg">200</h2>
                <p className="bg-red-200 rounded py-1"><i className="fa-sharp fa-solid fa-caret-down"></i>+10.5</p>
            </div>
            <div style={{
              padding: '0px 13px',
              margin: '10px -16px',
            }} >
                <p className="text-slate-500">Active deals</p>
                <h2 className="font-bold text-lg">40</h2>
                <p className="bg-emerald-200 rounded py-1"><i className="fa-solid fa-caret-up"></i>+10.5</p>
            </div>
           </div>
          <div className=" mx-8   p-2 rounded-md sm:p-4  bg-white">
         
              <div style={{
                display: 'flex',
                justifyContent:' space-between',
                alignItems:'center'
              }}>
                
       <section> 
        
       <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm border rounded-md   text-gray-900 " /></section>
        <section><p className="text-slate-400">Showing 2 - 10 of 100 result</p></section>
       
    </div>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<thead className="rounded-t-lg dark:bg-gray-700">
				<tr className="text-right border-b-2" >
					<th title="Win percentage" className="p-3 text-lg">Creators</th>
					<th title="Games behind" className="p-3 text-lg">Address</th>
					<th title="Home games" className="p-3 text-lg">Date</th>
					<th title="Away games" className="p-3 text-lg">Cost</th>
					<th title="Last 10 games" className="p-3 text-lg">View</th>
					<th title="Current streak" className="p-3 text-lg">Status</th>
				</tr>
			</thead>
			<tbody>
           
          {
            user.map(userData =>  <tr key={userData.id} className="text-right  border-b-2">
					
            <td className="px-3 py-3">
              <span style={{fontSize:'15px', textAlign:'center'}} className="">{userData?.name}</span>
            </td>
            <td className="px-3 py-3 text-right">
              <span style={{fontSize:'15px', textAlign:'center'}} className="">{userData?.email}</span>
            </td>
            <td className="px-3 py-3">
              <span style={{fontSize:'15px', textAlign:'center'}} className="">{userData?.date}</span>
            </td>
            <td className="px-3 py-3">
              <span style={{fontSize:'15px', textAlign:'center'}} className="">{userData?.cost}</span>
            </td>
            <td className="px-3 py-3">
              <span style={{fontSize:'15px', textAlign:'center'}} className="">{userData?.view}</span>
            </td>
            <td className="px-3 py-3">
              <span style={{fontSize:'15px', textAlign:'center'}} className=""><i className="fa-regular fa-circle-check bg-green-600 text-slate-50 rounded-2xl"></i></span>
              <span style={{fontSize:'15px', textAlign:'center'}} className="">{userData?.status}</span>
            </td>
            <td className="px-3 py-3">
              <span style={{fontSize:'15px', textAlign:'start'}} className="">
              <i className="fa-solid fa-trash-can"></i>   
       
                              </span>
            </td>
          </tr>)
          }
			</tbody>
		</table>
	</div>
</div>
          </div>

    </div> 
    </>
    );
};

export default Dashboard;