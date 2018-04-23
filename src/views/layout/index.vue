<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
export default {
  name: 'Layout',
  components: {Header, Main, Footer}
}
</script>
