<template>
  <div>
   <Content :pageKey="getPageKey()" />
  </div>
</template>

<script>

export default {
  name: "CommonGuide",
  props: [ 'guide' ],
  methods: {
      getPageKey() {
        const pages = this.$site.pages
        var requiredGuideKey;
        for (var i in pages) {
        	if(pages[i].relativePath == this.guide){
        	  requiredGuideKey = pages[i].key;
        	  }
        	}
        return requiredGuideKey;
        }
    }
};
</script>