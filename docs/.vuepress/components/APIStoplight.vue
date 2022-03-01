<template>
    <main class="apis-page">

        <iframe class = "api-container" width="100%" :src="$frontmatter.url" frameborder="0" ></iframe>
          <!-- <head >
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>Elements in HTML</title>
            <script src="https://unpkg.com/@stoplight/elements/web-components.min.js"></script>

        </head>
        <body>

            <elements-api :apiDescriptionUrl="$frontmatter.url"
            router="hash"
            />

        </body> -->
    </main>
</template>

<script>

export default{
    name: 'APIStoplight',

    methods:{
        log(msg){console.log(msg);}
    }
}
</script>

<style src="../theme/styles/components/apiOverview.styl" lang="stylus">
