<template>
  <div class="home">
    <Header/>
    <main id="main">
        <Carousel/>
        <Slider/>
    </main>
    <Footer/>
  </div>
</template>


<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Footer,
    Header,
    Slider
  }
}
</script>
