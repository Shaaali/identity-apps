<template>
    <main class="apis-page">

        <iframe class = "api-container" width="100%" :src="$frontmatter.url" frameborder="0" ></iframe>

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
