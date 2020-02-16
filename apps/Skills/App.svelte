<script>
  export let skills = [];
</script>

<style>
  .advantages-box {
    margin-bottom: 0px;
  }

  h4 {
    font-size: 18px;
    line-height: 1.55;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 2px;
  }
</style>

<section class="uk-section-small uk-padding-remove-vertical">
  <div class="uk-grid">
    {#each skills as skill}
      <div class="uk-width-1-2@m">
        <div class="advantages-box">
          <h4>{skill.name}</h4>
          <div class="opacity-box">
            <p>{skill.list.join(', ')}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
