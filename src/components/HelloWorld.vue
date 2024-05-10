<template>
  <div class="relative bg-humo sm:py-32 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-1 duration-300 ...">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl blur-[1.5px] hover:blur-none animate-pulse">Junior developer</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300 blur-[1.5px] hover:blur-none">Software engineer. enthusiastic about web design and development, but still in the process...</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
</script>