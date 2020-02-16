<script>
  export let showcase = [];
</script>

<section class="uk-section-small uk-padding-remove-vertical">
  <div class="uk-grid">
    <div class="uk-width-1-1">
      {#each showcase as item}
        <div>
          <div class="title">
            {item.name}
            <span class="role">{item.title}</span>
          </div>
          <a class="uk-button-link" href={item.url}>{item.url}</a>
          <div class="meta">
            <p class="uk-clear-fix info">
              <span class="title">Programming</span>
              <span class="value">{item.programming}</span>
            </p>
            <p class="uk-clear-fix info">
              <span class="title">Note</span>
              <span class="value">{item.shortNote}</span>
            </p>
          </div>
          <p />
        </div>
      {/each}
    </div>
  </div>
</section>
