<script>
  export let education = [];
</script>

<section class="uk-section-small uk-padding-remove-vertical">
  <div class="uk-grid">
    <div class="uk-width-1-1">
      {#each education as item}
        <div>
          <div class="title">
            {item.degree}
            <span class="role">{item.course}</span>
          </div>
          <p class="year">{item.involved}</p>
          <div class="meta">
            <p class="info uk-clear-fix">
              <span class="title">University</span>
              <span class="value">{item.university}</span>
            </p>
            <p class="info uk-clear-fix">
              <span class="title">Location</span>
              <span class="value">{item.location}</span>
            </p>
          </div>
          <p></p>
        </div>
      {/each}
    </div>
  </div>
</section>
