<template lang="html">
  <div class="error">
    <span class="txt">404
        <br>
        <span class="txt2">Not Found</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Not-Found'
}
</script>

<style lang="css">
  body {
    overflow: hidden;
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
  }

  .error {
    display: flex;
    align-items: center;
    /* Vertical center alignment */
    justify-content: center;
    /* Horizontal center alignment */
    height: 100vh;

    transform-origin: center center;
    -ms-transform-origin: center center;
    /* IE 9 */
    -webkit-transform-origin: center center;
    /* Safari and Chrome */
    -moz-transform-origin: center center;
    /* Firefox */
    -o-transform-origin: center center;
    /* Opera */
    transform: rotate(-20deg);
  }

  .txt,
  .txt2 {
    color: #282828;
    font-family: Impact, Charcoal, sans-serif;
    position: relative;
    display: block;
  }

  .txt {
    line-height: 0.7;
    font-size: 85vw;
    font-weight: bold;
  }

  .txt2 {
    white-space: nowrap;
    line-height: 2;
    padding-right: 30vw;
    text-align: right;
    font-size: 100px;
  }
</style>
