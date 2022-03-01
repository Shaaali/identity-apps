<template>
    <main class="apis-page">

        <head>
            <title>ReDoc</title>

            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://fonts.googleapis.com/css?family=Redressed:300,400,700|Redressed:300,400,700" rel="stylesheet"/>
            <script src="https://cdn.jsdelivr.net/npm/redoc@latest/bundles/redoc.standalone.js"> </script>

        </head>

        <body>
            <redoc :spec-url="$frontmatter.url"/>
        </body>
    </main>
</template>

<script>

export default{
    name: 'APIOverview',

    methods:{
        log(msg){console.log(msg);}
    }


}
</script>

<style src="../theme/styles/components/apiOverview.styl" lang="stylus"/>

