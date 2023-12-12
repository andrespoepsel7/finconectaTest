import React, {useState, useEffect} from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
import Loader from '../reusable/Loader'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../reusable/BackButton'
import { apiUrl } from '../../utils/Urls'
import Swal from 'sweetalert2'

export default function EditBook() {

  const {id} = useParams()

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')

  const handleEditBook = async() => {
    setLoading(true)
    const data = {
      title:title,
      author:author,
      publishYear:publishYear,
    }
    console.log(data)
    axios
      .put(`${apiUrl}/books/${id}`, data)
      .then((response) => {
        console.log(response)
        setLoading(false)
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
            text:"Book edited succesfully!"
        })
        navigate('/crud')
      }).catch((error)=>{
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
            text:"There was an error performing the request!"
        })
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${apiUrl}/books/${id}`)
      .then((response)=>{
        console.log(response)
        setTitle(response.data.title)
        setAuthor(response.data.author)
        setPublishYear(response.data.publishYear)
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error)
        setLoading(false)
      })
    // eslint-disable-next-line
  }, [])
  

  return (
    <>
      {loading ?
        <Loader/>
        :
        <>
          <WebComponent>
            <FullScreenDiv>
            <div className='w-full full-grow flex flex-col px-[10%] pt-[30px] pb-[50px]'>
                <BackButton destination='/crud'/>
                <div className='w-full flex items-center justify-center'>
                  <div className='w-[500px] mt-8 flex flex-col py-5 px-8 bg-slate-300 rounded-2xl border-[1px] border-blue-700 shadow-sm shadow-blue-700'>
                    <div className='flex flex-col'>
                      <p className='font-bold text-2xl text-blue-700 mb-1'>Title:</p>
                      <input 
                        type="text" 
                        className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                      />
                    </div>
                    <div className='flex flex-col mt-5'>
                      <p className='font-bold text-2xl text-blue-700 mb-1'>Author:</p>
                      <input 
                        type="text" 
                        className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                        onChange={(e)=>setAuthor(e.target.value)}
                        value={author}
                      />
                    </div>
                    <div className='flex flex-col mt-5'>
                      <p className='font-bold text-2xl text-blue-700 mb-1'>Publish Year:</p>
                      <input 
                        type="text" 
                        className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                        onChange={(e)=>setPublishYear(e.target.value)}
                        value={publishYear}
                      />
                    </div>
                    <div className='w-full flex flex-row items-center justify-end space-x-5 mt-5'>
                      <button 
                        className='bg-red-500 py-1 px-3 rounded-lg text-white font-bold hover:bg-red-400'
                        onClick={()=>navigate('/crud')}
                      >
                        Cancel
                      </button>
                      <button 
                        className='bg-green-500 py-1 px-3 rounded-lg text-white font-bold hover:bg-green-400'
                        onClick={handleEditBook}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FullScreenDiv>
          </WebComponent>
          <MobileComponent>
            <FullScreenDiv>
            <div className='w-full full-grow flex flex-col px-[5%] pt-[30px] pb-[50px]'>
                <BackButton destination='/crud'/>
                <div className='w-full flex items-center justify-center'>
                  <div className='w-[500px] mt-8 flex flex-col py-5 px-8 bg-slate-300 rounded-2xl border-[1px] border-blue-700 shadow-sm shadow-blue-700'>
                    <div className='flex flex-col'>
                      <p className='font-bold text-2xl text-blue-700 mb-1'>Title:</p>
                      <input 
                        type="text" 
                        className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                      />
                    </div>
                    <div className='flex flex-col mt-5'>
                      <p className='font-bold text-2xl text-blue-700 mb-1'>Author:</p>
                      <input 
                        type="text" 
                        className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                        onChange={(e)=>setAuthor(e.target.value)}
                        value={author}
                      />
                    </div>
                    <div className='flex flex-col mt-5'>
                      <p className='font-bold text-2xl text-blue-700 mb-1'>Publish Year:</p>
                      <input 
                        type="text" 
                        className='py-1 px-3 text-slate-600 rounded-md outline-none' 
                        onChange={(e)=>setPublishYear(e.target.value)}
                        value={publishYear}
                      />
                    </div>
                    <div className='w-full flex flex-row items-center justify-end space-x-5 mt-5'>
                      <button 
                        className='bg-red-500 py-1 px-3 rounded-lg text-white font-bold hover:bg-red-400'
                        onClick={()=>navigate('/crud')}
                      >
                        Cancel
                      </button>
                      <button 
                        className='bg-green-500 py-1 px-3 rounded-lg text-white font-bold hover:bg-green-400'
                        onClick={handleEditBook}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FullScreenDiv>
          </MobileComponent>
        </>
      }
    </>
  )
}
