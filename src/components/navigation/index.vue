<template>
 <nav>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4 pb-2xl">
    <div class="hidden w-full md:block md:w-auto">
      <ul class="wobble-hor-top font-medium flex flex-row">
        <li>
          <router-link 
            :to="{ name: 'portfolio.home.index' }" 
            class="block py-2 px-3 text-center text-xl font-semibold leading-8 text-humo sm:text-2xl sm:leading-9"
          > 
            Home
          </router-link>
        </li>
        <li>
          <router-link 
            :to="{ name: 'portfolio.about.index' }"
            class="block py-2 px-3 text-center text-xl font-semibold leading-8 text-humo sm:text-2xl sm:leading-9"
          >
            About
          </router-link>
        </li>
        <li>
          <router-link 
            :to="{ name: 'portfolio.home.index' }"
            class="block py-2 px-3 text-center text-xl font-semibold leading-8 text-humo sm:text-2xl sm:leading-9"
          >
            Writing
          </router-link>
        </li>
        <li>
          <router-link 
            :to="{ name: 'portfolio.home.index' }"
            class="block py-2 px-3 text-center text-xl font-semibold leading-8 text-humo sm:text-2xl sm:leading-9"
          >
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
</script>
