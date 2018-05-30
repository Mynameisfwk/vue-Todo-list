<template>
    <div>
        <div class="header">
            <p>{{title}}</p>
        </div>
    </div>
</template>



<script>
export default {
    props:["title"]
}
</script>

<style>
    .header{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #cccccc;
        text-align: center
    }
</style>