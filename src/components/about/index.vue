<template>
  <section 
    class="relative isolate overflow-hidden bg-gren-1 px-6 my-24 lg:py-12 sm:py-32 lg:px-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-humo duration-300 ...">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-00/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <img class="mx-auto h-20" src="/public/cimagroup.png" alt="" />
      <figure class="mt-10">
        <blockquote class="text-center text-xl font-semibold leading-8 text-green-2 sm:text-2xl sm:leading-9">
          <p>“I graduated with a degree in Software Engineering from the University of Colima and currently work as a junior developer at CIMA GROUP in Manzanillo. With a year since graduation, I'm enthusiastic about development, thrive in team environments, and continuously expand my skills in both frontend and backend development.”</p>
        </blockquote>
        <figcaption class="mt-10">
          <img class="mx-auto h-20 w-25 rounded-full" src="/public/photo.jpeg" alt="" />
          <div class="mt-4 flex items-center justify-center space-x-3 text-base">
            <div class="font-semibold text-gray-900">Gaddiel Patiño</div>
            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <div class="text-green-2">Junior developer in CIMA GROUP</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
    <section class="relative isolate overflow-hidden lg:grid-cols-2 px-6 my-24 lg:py-12 sm:py-32 lg:px-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-humo duration-300 ...">
     <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] rounded-3xl" width="158" height="48"> Proyecto 1 </div>
        <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] rounded-3xl" width="158" height="48"> Proyecto 2 </div>
      </div>
  </section>
</template>
