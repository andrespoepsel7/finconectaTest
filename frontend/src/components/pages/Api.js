import React, {useState, useEffect} from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
import Loader from '../reusable/Loader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function Api() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [meals, setMeals] = useState([])
  // Get means fetch from an api, post is submitting data to an api
  const [selected, setSelected] = useState('get')
  const [refresh, setRefresh] = useState(false)
  const [form, setForm] = useState({
    name:'',
    age:'',
    gender:'',
    country:'',
    profession:'',

  })

  const handleSubmit = async() =>{
    setLoading(true)
    axios
      .post('https://jsonplaceholder.typicode.com/posts', form)
      .then((response)=> {
        console.log(response)
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
            icon:'success',
            title:'Success!',
            text:"User created succesfully!"
        })
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error)
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
            icon:'error',
            title:'Error!',
            text:"Please try again!"
        })
        setLoading(false)
      })
  }

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => {
        setMeals(response.data.meals);
        console.log(response.data.meals)
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
      });
  }, [refresh]);

  return (
    <>
      {loading ?
        <Loader/>
        :
        <>
          <WebComponent>
            <FullScreenDiv>
              <div className='w-full full-grow px-[10%]'>
                <div className='w-full flex flex-row items-center justify-center space-x-16 mt-8 mb-8 text-blue-500'>
                  <p 
                    onClick={()=>{
                      setSelected('get')
                      setRefresh(!refresh)
                    }} 
                    className={`text-2xl font-bold cursor-pointer ${selected === 'get' && "underline text-blue-700"}`}
                  >
                    Fetch From Api
                  </p>
                  <p 
                    onClick={()=>setSelected('post')} 
                    className={`text-2xl font-bold cursor-pointer ${selected === 'post' && "underline text-blue-700"}`}
                  >
                    Post To Api
                  </p>
                </div>
                {selected === 'get' &&
                  <div className='w-full grid grid-cols-3 gap-5 pb-[50px]'>
                    {meals?.map((meal, i)=>(
                      <div key={i} className='bg-slate-200 flex flex-col w-full px-4 py-3 rounded-lg border-[1px] border-blue-500 shadow-sm shadow-blue-500'>
                        <p className='font-bold text-blue-700 text-center'>{meal.strMeal}</p>
                        <div className='flex flex-row items-center mt-3'>
                          <p className='text-blue-500 font-semibold mr-2'>Id:</p>
                          <p>{meal.idMeal}</p>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                          <img src={meal.strMealThumb} alt={meal.idMeal} />
                        </div>
                      </div>
                    ))}
                  </div>
                }
                {selected === 'post' &&
                  <div className='w-full flex items-center justify-center pb-[50px]'>
                    <div className='w-[500px] mt-8 flex flex-col py-5 px-8 bg-slate-300 rounded-2xl border-[1px] border-blue-700 shadow-sm shadow-blue-700'>
                      <div className='flex flex-col'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Name:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Age:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Gender:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Country:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Profession:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='w-full flex flex-row items-center justify-end space-x-5 mt-5'>
                        <button 
                          className='bg-red-500 py-1 px-3 rounded-lg text-white font-bold hover:bg-red-400'
                          onClick={()=>navigate('/api')}
                        >
                          Cancel
                        </button>
                        <button 
                          className='bg-green-500 py-1 px-3 rounded-lg text-white font-bold hover:bg-green-400'
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                }

              </div>
            </FullScreenDiv>
          </WebComponent>
          <MobileComponent>
            <FullScreenDiv>
            <div className='w-full full-grow px-[5%]'>
                <div className='w-full flex flex-row items-center justify-between mt-8 mb-8 text-blue-500'>
                  <p 
                    onClick={()=>{
                      setSelected('get')
                      setRefresh(!refresh)
                    }} 
                    className={`text-2xl font-bold cursor-pointer ${selected === 'get' && "underline text-blue-700"}`}
                  >
                    Fetch From Api
                  </p>
                  <p 
                    onClick={()=>setSelected('post')} 
                    className={`text-2xl font-bold cursor-pointer ${selected === 'post' && "underline text-blue-700"}`}
                  >
                    Post To Api
                  </p>
                </div>
                {selected === 'get' &&
                  <div className='w-full grid grid-cols-1 gap-5 pb-[50px]'>
                    {meals?.map((meal, i)=>(
                      <div key={i} className='bg-slate-200 flex flex-col w-full px-4 py-3 rounded-lg border-[1px] border-blue-500 shadow-sm shadow-blue-500'>
                        <p className='font-bold text-blue-700 text-center'>{meal.strMeal}</p>
                        <div className='flex flex-row items-center mt-3'>
                          <p className='text-blue-500 font-semibold mr-2'>Id:</p>
                          <p>{meal.idMeal}</p>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                          <img src={meal.strMealThumb} alt={meal.idMeal} />
                        </div>
                      </div>
                    ))}
                  </div>
                }
                {selected === 'post' &&
                  <div className='w-full flex items-center justify-center pb-[50px]'>
                    <div className='w-[500px] mt-8 flex flex-col py-5 px-8 bg-slate-300 rounded-2xl border-[1px] border-blue-700 shadow-sm shadow-blue-700'>
                      <div className='flex flex-col'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Name:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Age:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Gender:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Country:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-2xl text-blue-700 mb-1'>Profession:</p>
                        <input 
                          type="text" 
                          className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                          onChange={(e)=>setForm({...form, name:e.target.value})}
                        />
                      </div>
                      <div className='w-full flex flex-row items-center justify-end space-x-5 mt-5'>
                        <button 
                          className='bg-red-500 py-1 px-3 rounded-lg text-white font-bold hover:bg-red-400'
                          onClick={()=>navigate('/api')}
                        >
                          Cancel
                        </button>
                        <button 
                          className='bg-green-500 py-1 px-3 rounded-lg text-white font-bold hover:bg-green-400'
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                }

              </div>
            </FullScreenDiv>
          </MobileComponent>
        </>
      }
    </>
  )
}
