<script>
  import Wave from "./Wave.svelte";
  export let title;
  export let description;
</script>

<style>
  .uk-section-small {
    padding-bottom: 50px !important;
    height: calc(100% - 110px);
  }

  .heading {
    font-size: 30px;
    line-height: 1.4;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 5px;
  }

  .heading:after {
    content: ".";
    color: #33F;
  }

  .zigzag {
    width: 105px;
    bottom: -5px;
    left: 15px;
  }
</style>

<div class="uk-section-small uk-padding-remove-vertical">
  <h2 class="heading">{title}</h2>
  <div class="opacity-box">
    <p>{description}</p>
  </div>
</div>
<div class="zigzag">
  <Wave strokeColor="#EF0" />
  <Wave strokeColor="#336" />
</div>
