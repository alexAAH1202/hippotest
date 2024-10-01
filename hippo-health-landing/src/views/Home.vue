<template>
  <div class="home">
    <Header />
    <Hero />
    <Features />
    <AboutUs />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Features from '@/components/Features.vue'
import AboutUs from '@/components/AboutUs.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Features,
    AboutUs,
    Footer
  }
}
</script>
