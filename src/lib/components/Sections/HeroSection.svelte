<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Ciao! Sono Davide</h3>
  <div class="underscore mb-m"></div>
  <h1>Sono uno sviluppatore Svelte che crea esperienze web</h1>
  <h1 class="dark-grey mb-m">intuitive e performanti.</h1>
  <Button {onclick}>Parliamone</Button>
</section>

<style>
  .hero-section {
    padding-top: 4rem;
  }
  @media screen and (max-width: 640px) {
    .hero-section {
      padding-top: 1rem;
    }
  }
</style>
