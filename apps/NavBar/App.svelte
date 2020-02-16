<script>
  import { onMount } from "svelte";
  export let navItems = [];
  export let iconUrl;
</script>

<style>
  header {
    padding: 20px 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 1000;
    border-bottom: 1px solid #e3e3e3;
    text-align: center;
  }

  .nav-list {
    align-self: center;
  }

  .nav-list ul {
    list-style: none;
    list-style-type: none;
    display: inline-block;
  }

  .nav-list ul li {
    display: inline-block;
    padding: 0px 10px;
  }

  .nav-list ul li a {
    font-size: 12px;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    line-height: 1.66;
    color: #000;
    text-transform: uppercase;
  }

  .nav-list ul li a:hover {
    color: #1e87f0;
    text-decoration: underline;
  }

</style>

<header>
  <div class="uk-container">
    <div class="uk-grid uk-visible@m">
      <div class="uk-width-1-4 icon">
        <img data-src={iconUrl} width="44" height="44" alt="" uk-img />
      </div>
      <div class="uk-width-expand nav-list">
        <ul>
          {#each navItems as item}
            <li>
              <a href={'#' + item} class="list-item" uk-scroll="offset: 100">
                {item}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="uk-hidden@m">
      <div class="uk-width-expand icon">
        <img data-src={iconUrl} width="44" height="44" alt="" uk-img />
      </div>
    </div>
  </div>
</header>
