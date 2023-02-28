<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <h2>Git Fit</h2>
            </a>
            <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    
        <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
            Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                Docs
            </a>
            <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
                Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
                </a>
            </div>
            </div>
        </div>
    
        <div class="navbar-end">
            <div class="navbar-item">
            <div class="field is-grouped">
                <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                    <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                    Tweet
                    </span>
                </a>
                </p>
                <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip">
                    <span class="icon">
                    <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                </a>
                </p>
            </div>
            </div>
        </div>
        </div>
    </nav>

    <div class="container">

        <div class="columns">

            <!-- first column -->
            <div class="column">
                <div id="running" class="box">
                    <h1>RUNNING</h1>
                </div>
                <div id="swimming" class="box">
                    <h1>SWIMMING</h1>
                </div>
            </div>

            <!--second column -->
            <div class="column">
                <div id="walking" class="box">
                    <h1>WALKING</h1>
                </div>
                <div id="weight-training" class="box">
                    <h1>WEIGHT TRAINING</h1>
                </div>
            </div>

            <!-- third column -->
            <div class="column">
                <div id="hiit" class="box">
                    <h1>HIGH INTENSITY INTERVAL TRAINING</h1>
                </div>
                <div id="calistenics" class="box">
                    <h1>CALISTENICS</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    *{
        box-sizing: border-box;
    }
    html, body{
        height: 100%;
    }
    body{
        margin: 0;
    }
    .navbar-item > h2{
        font-size: xx-large;
        font-weight: bolder;
    }
    .container{
        margin-top: 15px;
    }
    .column > .box{
        text-align: center;
    }

</style>
