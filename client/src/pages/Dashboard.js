import React from 'react'
import Navbar from '../components/Navbar'

function Dashboard({active}) {
  return (
    <>
       <Navbar name={"dashboard"}/>
       dashboard
       <div class="mt-8">
      <h2
        class="
          mb-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          md:mb-6
        "
      >
        Get in touch
      </h2>

      <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
        Please fill in the details below so that we can get in contact with you.
      </p>
    </div>
    <div class="text-gray-600">
      <div class="container flex flex-col flex-wrap px-5 py-4 mx-auto">
        <div class="flex flex-wrap mx-auto">
          <a
            class="
              inline-flex
              items-center
              justify-center
              w-1/2
              py-3
              font-medium
              leading-none
              tracking-wider
              text-indigo-500
              bg-gray-100
              border-b-2 border-indigo-500
              rounded-t
              sm:px-6 sm:w-auto sm:justify-start
              title-font
            "
          >
            STEP 1
          </a>
          <a
            class="
              inline-flex
              items-center
              justify-center
              w-1/2
              py-3
              font-medium
              leading-none
              tracking-wider
              border-b-2 border-gray-200
              sm:px-6 sm:w-auto sm:justify-start
              title-font
              hover:text-gray-900
            "
          >
            STEP 2
          </a>
          <a
            class="
              inline-flex
              items-center
              justify-center
              w-1/2
              py-3
              font-medium
              leading-none
              tracking-wider
              border-b-2 border-gray-200
              sm:px-6 sm:w-auto sm:justify-start
              title-font
              hover:text-gray-900
            "
          >
            STEP 3
          </a>
        </div>
        <div class="flex flex-col w-full text-center">
          <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard