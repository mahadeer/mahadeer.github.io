<script>
  export let InfoCard;
  export let ContentCard;
  export let infoProps;
  export let contentProps;
</script>

<section class="uk-section-small">
  <div class="uk-container">
    <div class="uk-grid">
      <div class="uk-width-1-3@m">
        <InfoCard {...infoProps} />
      </div>
      <div class="uk-width-2-3@m">
        <ContentCard {...contentProps} />
      </div>
    </div>
  </div>
</section>
<hr class="uk-divider-icon uk-margin-remove" />
