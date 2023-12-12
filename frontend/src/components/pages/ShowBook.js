import React, {useState, useEffect} from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
import Loader from '../reusable/Loader'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../../utils/Urls'
import BackButton from '../reusable/BackButton'


export default function ShowBook() {
  const {id} = useParams()
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${apiUrl}/books/${id}`)
      .then((response)=>{
        console.log(response.data)
        setBook(response.data)
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
                  {book ?
                    <div className='w-full mt-8 flex flex-col py-5 px-8 bg-slate-300 rounded-2xl border-[1px] border-blue-700 shadow-sm shadow-blue-700'>
                      <div className='flex flex-row items-center'>
                        <p className='font-bold text-3xl text-blue-700'>Title:</p>
                        <p className='text-3xl ml-5'>{book.title}</p>
                      </div>
                      <div className='flex flex-row items-center mt-5'>
                        <p className='font-bold text-xl text-blue-700'>Author:</p>
                        <p className='text-xl ml-5'>{book.author}</p>
                      </div>
                      <div className='flex flex-row items-center mt-5'>
                        <p className='font-bold text-xl text-blue-700'>Publish Year:</p>
                        <p className='text-xl ml-5'>{book.publishYear}</p>
                      </div>
                      <div className='flex flex-row items-center mt-5'>
                        <p className='font-bold text-xl text-blue-700'>Id:</p>
                        <p className='text-xl ml-5'>{book._id}</p>
                      </div>
                      <div className='flex flex-row items-center mt-5'>
                        <p className='font-bold text-xl text-blue-700'>Created At:</p>
                        <p className='text-xl ml-5'>{new Date(book.createdAt).toLocaleString('es')}</p>
                      </div>
                      <div className='flex flex-row items-center mt-5'>
                        <p className='font-bold text-xl text-blue-700'>Updated At:</p>
                        <p className='text-xl ml-5'>{new Date(book.updatedAt).toLocaleString('es')}</p>
                      </div>
                      
                    </div>
                    :
                    <div className='text-2xl text-red-500 font-bold'>
                      Error fetching data...
                    </div>
                  }
                </div>
              </div>
            </FullScreenDiv>
          </WebComponent>
          <MobileComponent>
            <FullScreenDiv>
            <div className='w-full full-grow flex flex-col px-[10%] pt-[30px] pb-[50px]'>
                <BackButton destination='/crud'/>
                <div className='w-full flex items-center justify-center'>
                  {book ?
                    <div className='w-full mt-8 flex flex-col py-5 px-8 bg-slate-300 rounded-2xl border-[1px] border-blue-700 shadow-sm shadow-blue-700'>
                      <div className='flex flex-col'>
                        <p className='font-bold text-2xl text-blue-700'>Title:</p>
                        <p className='text-2xl'>{book.title}</p>
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-lg text-blue-700'>Author:</p>
                        <p className='text-lg'>{book.author}</p>
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-lg text-blue-700'>Publish Year:</p>
                        <p className='text-lg'>{book.publishYear}</p>
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-lg text-blue-700'>Id:</p>
                        <p className='text-lg'>{book._id}</p>
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-lg text-blue-700'>Created At:</p>
                        <p className='text-lg'>{new Date(book.createdAt).toLocaleString('es')}</p>
                      </div>
                      <div className='flex flex-col mt-5'>
                        <p className='font-bold text-lg text-blue-700'>Updated At:</p>
                        <p className='text-lg'>{new Date(book.updatedAt).toLocaleString('es')}</p>
                      </div>
                      
                    </div>
                    :
                    <div className='text-2xl text-red-500 font-bold'>
                      Error fetching data...
                    </div>
                  }
                </div>
              </div>
            </FullScreenDiv>
          </MobileComponent>
        </>
      }
    </>
  )
}
