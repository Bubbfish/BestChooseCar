<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <div>
        <div class="tets1">
          <button @click="gotest">dd</button>
        </div>
        <div class="tets1">
          <button @click="gomintui">mintui</button>
        </div>
        <div class="tets1">
          <button @click="goba">mintui</button>
        </div>
    </div>

    
  </div>
</template>

<script>


export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods :{
    gotest(){
      console.log(1);
      this.$router.push(`/mall`);
    },
    gomintui(){
      this.$router.push(`/mintui`);
    },
    goba(){
       this.$router.push(`/banner`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .vwtest {
  position: relative;
} */
.vwtest::before {
  content: "";
  display: block;
  width: 1px;
  margin-left: -1px;
  height: 0;
}
/* .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
} */
.vwd{
  width: 188px;
  background-color: red;
}
.vwd{
  aspect-ratio:'188:246';
}
.tets1{
  width:188px;
  height: 188px;
  background-color: #fcd;
}
</style>
