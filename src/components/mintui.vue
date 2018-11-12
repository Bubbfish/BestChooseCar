<template>
<div>
    <div class="postcssd sss message">
        <div class="header">a</div>
        <div class="title content">b s s</div>
        <div class="danger">d</div>
    </div>
    <mt-swipe :auto="4000">
        <mt-swipe-item class="tets">1</mt-swipe-item>
        <mt-swipe-item class="tets">2</mt-swipe-item>
        <mt-swipe-item class="tets">3</mt-swipe-item>
    </mt-swipe>
</div>
 
</template>
<script>
// import { Swipe, SwipeItem } from 'mint-ui'
export default {
// components: { Swipe, SwipeItem },
  data() {
    return {};
  }
};
</script>
<style lang="postcss">
.tets{
    background-color: #0089dc;
    color: #fff;
}
.mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.mint-swipe-item {
    line-height: 200px;
}
:root{
    --text-color:rgb(189, 32, 32);
    --danger-theme: {
        color: white;
        background-color: red;
    }
}

.postcssd{
    display: flex
}
.sss{
    color: var(--text-color);
}
.message {
  font-weight: normal;
  & .header {
   font-weight: bold;
  }
  @nest .body & {
   color: black;
 }
}
:global .title {
 font-size: 20px;
}
 
.content {
 font-weight: bold;
}

.danger {
  @apply --danger-theme;
}
</style>

