<template v-if="routes.name === 'main'">
    <div id="index">
        <header-view></header-view>    
        <router-view />
    </div>
</template>

<script>
    import header from './components/header.vue'

    export default{
        components : {
            'header-view' : header 
        },
    }

    
</script>