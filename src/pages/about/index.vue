<template>
  <NavigationComponent/>
  <AboutIndex/>
</template>

<script>
import NavigationComponent from 'components/navigation/index.vue'
import AboutIndex from 'components/about/index.vue'
import FooterIndex from 'components/footer/index.vue'

export default {
  name: 'aboutIndexPage',
  components: {
    NavigationComponent,
    AboutIndex,
    FooterIndex
  }
}
</script>
