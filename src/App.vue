<template>
    <div id="app">
        <header>
            <span>PWA Notes</span>
        </header>
        <main>
            <img src="./assets/logo.png"
                 alt="Vue.js PWA"
                 class="title-img">
            <pwa-notes></pwa-notes>
        </main>
        <footer>
            by wanglinzhizhi.me
        </footer>
    </div>
</template>

<script>
    import PwaNotes from './components/pwa-notes'

export default {
      name: 'app',
      components: {
        PwaNotes
      }
    }
</script>

<style>
    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .title-img {
        width: 70px;
    }

    main {
        text-align: center;
        margin-top: 40px;
    }

    header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495e;
        color: #ffffff;
    }

    header span {
        display: block;
        position: relative;
        font-size: 20px;
        line-height: 1;
        letter-spacing: 0.02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
    }
    footer {
        color: #7f8c8d;
        margin: 2em 30px;
        padding: 2em;
        border-top: 1px solid #e5e5e5;
        font-size: 0.9em;
        text-align: center;
    }
</style>
