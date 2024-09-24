<template>
  <NavigationComponent/>
  <HomeIndex/>
  <FooterIndex/>
</template>

<script>
import NavigationComponent from 'components/navigation/index.vue'
import HomeIndex from 'components/home/index.vue'
import FooterIndex from 'components/footer/index.vue'

export default {
  name: 'HomeIndexPage',
  components: {
    NavigationComponent,
    HomeIndex,
    FooterIndex
  }
}
</script>
