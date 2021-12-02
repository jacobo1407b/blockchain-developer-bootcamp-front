import { useState } from 'react';
import Cookies from 'cookies'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head';
import CardLogin from '@components/CardLogin';
import useAuth from 'hooks/Auth';


type FormData = {
  address: string;
  password: string;
}

const Home: NextPage = (props: any) => {
  useAuth(props.login, props.sesion)
  const router = useRouter()

  const [formData, setformData] = useState<FormData>(initialState());
  const [load, setLoad] = useState<boolean>(false)


  function onChange(e: any) {
    const { value, name } = e.target;
    setformData({
      ...formData,
      [name]: value
    });
  }

  function onSubmit() {
    if (!formData.address || !formData.password) {
      alert('Complete los campos')
    } else {
      setLoad(true)
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(res => {
          setLoad(false)
          if (res.error) {
            alert(res.message)
          } else {
            router.push('/propiedades')
          }
        })
    }
  }

  return (
    <>

      <Head>
        <title>Login</title>
      </Head>
      <div>
        <div className="relative z-20 flex w-full ">
          <div className="w-full md:w-2/3">
            <div className="flex flex-col items-start justify-center w-full h-full pb-20">
              <div className="relative w-full lg:pl-10">
                <h1 className="relative z-0 w-full max-w-md py-2 text-4xl font-black text-left text-white sm:py-5 sm:text-6xl" data-unsp-sanitized="clean">Login</h1>
              </div>

              <div className="flex flex-col items-start my-4 text-left lg:pl-10">
                <CardLogin
                  loading={load}
                  onChange={onChange}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </div>

          <div className="relative w-0 md:w-1/2"></div>
        </div>
        <div className="absolute  top-0 left-0 z-0 flex items-start justify-center w-full h-screen overflow-hidden opacity-75">
          <div className="relative z-20 w-1/2">
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-yellow-500 to-yellow-500"></div>
          </div>
          <div className="relative z-10 w-1/2 ">
            <div className="absolute top-0 right-0 hidden w-full h-full sm:block">
              <div className="flex items-center justify-center w-screen h-screen transform scale-75 -rotate-12 -translate-x-80 sm:-translate-x-64 sm:scale-125 md:scale-125 min-w-persp md:-translate-x-24">
                <div className="flex flex-col flex-wrap items-start justify-start w-full h-screen mx-auto space-x-3 space-y-3 transformPerspective">
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm mt-3 ml-3">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                  <div className="h-auto bg-gray-200 bg-cover rounded-lg overflow-hidden bg-top-center w-auto max-w-sm">
                    <img src="https://source.unsplash.com/640x390/?tech,app" className="object-cover w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 z-50 w-full h-screen bg-gradient-to-r from-yellow-500 t to-transparent"></div>
          </div>
        </div>
      </div>

    </>
  )
}

function initialState(): FormData {
  return {
    address: "",
    password: ""
  }
}
export default Home

export async function getServerSideProps(ctx: any) {
  //console.log(ctx)
  const cookies = new Cookies(ctx?.req, ctx?.res);
  var isSesion = cookies.get('userlogin')
  const login = isSesion ? true : false
  var sesion = isSesion ? isSesion : null;

  if (login) {
    return {
      redirect: {
        destination: '/propiedades',
        permanent: false,
      },
      props: { login, sesion }
    }
  }


  return {
    props: { login, sesion }
  }
}