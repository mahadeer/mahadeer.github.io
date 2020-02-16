<script>
  export let profileUrl;
  export let me;
  export let role;
  export let company;

  let description = me.description
    .replace("{position}", role)
    .replace("{company}", company);
</script>

<style>
  .profile-pic {
    object-fit: contain;
    height: 300px;
  }

  .about-me .name h1 {
    margin-bottom: 2px !important;
    font-size: 36px;
    line-height: 1.25;
    font-weight: 700;
    font-family: "Lato", sans-serif;
  }

  .about-me .title {
    margin-bottom: 20px;
  }

  .about-me .email a {
    text-decoration: none;
    color: #000;
  }

  .about-me .email a:hover {
    text-decoration: underline;
  }

  .about-me .info {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  .about-me .info .title {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    line-height: 1.66;
    float: left;
    display: block;
  }

  .about-me .info .title + span {
    display: block;
    padding-left: 90px;
    opacity: 0.8;
  }
</style>

<section class="uk-section-small">
  <div class="uk-container">
    <div class="uk-hidden@m">
      <img
        class="profile-pic"
        data-src={profileUrl}
        width="650"
        alt=""
        uk-img />
    </div>
    <div class="uk-grid">
      <div class="uk-width-2-3@m">
        <div class="about-me">
          <div class="name">
            <h1>I am {me.name}</h1>
          </div>
          <div class="text">
            <div class="opacity-box">
              <p>{description}</p>
            </div>
          </div>
          <div class="info">
            <p class="uk-hidden">
              <span class="title">Phone</span>
              <span>{me.phone}</span>
            </p>
            <p class="uk-clear-fix">
              <span class="title">Email</span>
              <span class="email">
                <a href={'mailto:' + me.email}>{me.email}</a>
              </span>
            </p>
            <p class="uk-clear-fix">
              <span class="title">Social</span>
              <span class="social-icons">
                <a
                  target="blank"
                  href={me.social.github}
                  class="uk-margin-small-right"
                  uk-icon="github" />
                <a
                  target="blank"
                  href={me.social.fb}
                  class="uk-margin-small-right"
                  uk-icon="facebook" />
                <a
                  target="blank"
                  href={me.social.twitter}
                  class="uk-margin-small-right"
                  uk-icon="twitter" />
                <a
                  target="blank"
                  href={me.social.linkedin}
                  uk-icon="linkedin" />
              </span>
            </p>
          </div>
          <div class="uk-clear-fix about-btns">
            <a
              href="#contact"
              class="uk-button uk-button-primary uk-button-large">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div class="uk-width-1-3@m uk-visible@m">
        <img
          class="profile-pic"
          data-src={profileUrl}
          width="650"
          alt=""
          uk-img />
      </div>
    </div>
  </div>
</section>
<hr class="uk-divider-icon uk-margin-remove" />
