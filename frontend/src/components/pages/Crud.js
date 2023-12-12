import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../reusable/Loader'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import {apiUrl} from '../../utils/Urls'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Crud() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])
  const [deleteCount, setDeleteCount] = useState(0)

  const handleDelete = async(id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0700f2",
      cancelButtonColor: "#de82b35",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${apiUrl}/books/${id}`)
          .then((response)=>{
            console.log(response)
            Swal.fire({
              title: "Deleted!",
              text: "Book deleted succesfully",
              icon: "success"
            });
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
          })
        setDeleteCount(deleteCount+1)
        
      }
    });
  }

  useEffect(() => {
    setLoading(true)
    axios.get(`${apiUrl}/books`).then((response)=>{
      setBooks(response.data.data)
      console.log(response.data.data)
      setLoading(false)
    }).catch((error)=>{
      console.log(error)
      setLoading(false)
    })
    
  }, [deleteCount])
  
  return (
    <>
      {loading ?
        <Loader/>
        :
        <>
          <WebComponent>
            <FullScreenDiv>
              <div className='relative full-grow w-full px-[10%]'>
                <p className='my-8 text-center text-2xl'>Books List</p>
                <div className='w-full grid grid-cols-3 gap-5 pb-[50px]'>
                  {books?.map((book, i)=>(
                    <div key={i} className='bg-slate-200 flex flex-col w-full px-4 py-3 rounded-lg border-[1px] border-blue-500 shadow-sm shadow-blue-500'>
                      <p className='font-bold text-blue-700 text-center'>{book.title}</p>
                      <div className='flex flex-row items-center mt-3'>
                        <p className='text-blue-500 font-semibold mr-2'>Author:</p>
                        <p>{book.author}</p>
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <p className='text-blue-500 font-semibold mr-2'>Publish Year:</p>
                        <p>{book.publishYear}</p>
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <p className='text-blue-500 font-semibold mr-2'>Modified:</p>
                        <p>{new Date(book.updatedAt).toLocaleString('es')}</p>
                      </div>
                      <div className='flex flex-row items-center justify-end mt-5'>
                        <BsInfoCircle onClick={()=>navigate(`/show_book/${book._id}`)} className='cursor-pointer w-[25px] h-[25px] fill-blue-700 hover:scale-110'/>
                        <AiOutlineEdit onClick={()=>navigate(`/edit_book/${book._id}`)} className='cursor-pointer ml-2 w-[25px] h-[25px] fill-yellow-500 hover:scale-110'/>
                        <MdOutlineDelete onClick={()=>handleDelete(book._id)} className='cursor-pointer ml-2 w-[25px] h-[25px] fill-red-500 hover:scale-110'/>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='absolute right-[10%] top-8'>
                  <button
                    onClick={()=>navigate('/create_book')} 
                    className='flex flex-row items-center justify-center bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-500'
                  >
                    <p className='text-lg'>Create book</p>
                    <MdOutlineAddBox className='w-[25px] h-[25px] ml-2'/>
                  </button>
                </div>
              </div>
            </FullScreenDiv>
          </WebComponent>
          <MobileComponent>
            <FullScreenDiv>
            <div className='relative full-grow w-full px-[5%] pb-[50px]'>
                <p className='my-8 text-2xl '>Books List</p>
                <div className='w-full grid grid-cols-1 gap-5'>
                  {books?.map((book, i)=>(
                    <div key={i} className='bg-slate-200 flex flex-col w-full px-4 py-3 rounded-lg border-[1px] border-blue-500 shadow-sm shadow-blue-500'>
                      <p className='font-bold text-blue-700 text-center'>{book.title}</p>
                      <div className='flex flex-row items-center mt-3'>
                        <p className='text-blue-500 font-semibold mr-2'>Author:</p>
                        <p>{book.author}</p>
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <p className='text-blue-500 font-semibold mr-2'>Publish Year:</p>
                        <p>{book.publishYear}</p>
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <p className='text-blue-500 font-semibold mr-2'>Modified:</p>
                        <p>{new Date(book.updatedAt).toLocaleString('es')}</p>
                      </div>
                      <div className='flex flex-row items-center justify-end mt-5'>
                        <BsInfoCircle onClick={()=>navigate(`/show_book/${book._id}`)} className='cursor-pointer w-[25px] h-[25px] fill-blue-700 hover:scale-110'/>
                        <AiOutlineEdit onClick={()=>navigate(`/edit_book/${book._id}`)} className='cursor-pointer ml-2 w-[25px] h-[25px] fill-yellow-500 hover:scale-110'/>
                        <MdOutlineDelete onClick={()=>handleDelete(book._id)} className='cursor-pointer ml-2 w-[25px] h-[25px] fill-red-500 hover:scale-110'/>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='absolute right-[5%] top-8'>
                  <button
                    onClick={()=>navigate('/create_book')} 
                    className='flex flex-row items-center justify-center bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-500'
                  >
                    <p className='text-lg'>Create book</p>
                    <MdOutlineAddBox className='w-[25px] h-[25px] ml-2'/>
                  </button>
                </div>
              </div>
            </FullScreenDiv>
          </MobileComponent>  
        </>
      }
    </>
  )
}
