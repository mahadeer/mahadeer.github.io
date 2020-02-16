<script>
  export let experience = [];
</script>

<section class="uk-section-small uk-padding-remove-vertical">
  <div class="uk-grid">
    <div class="uk-width-1-1">
      {#each experience as item}
        <div>
          <div class="title">
            {item.role}
            <span class="role">{item.company}</span>
          </div>
          <p class="year">{item.involved}</p>
          <div class="meta">
            <p class="info uk-clear-fix">
              <span class="title">Location</span>
              <span class="value">{item.location}</span>
            </p>
            <p class="info uk-clear-fix">
              <span class="title">Technology</span>
              <span class="value">{item.technology}</span>
            </p>
          </div>
          <div class="opacity-box">
            <p class="uk-margin-top" style="font-style: italic;">
              {item.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
