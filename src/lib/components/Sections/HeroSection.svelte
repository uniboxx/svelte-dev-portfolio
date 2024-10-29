<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello! I'm Davide</h3>
  <div class="underscore mb-m"></div>
  <h1>I'm a Svelte developer crafting intuitive and performant</h1>
  <h1 class="dark-grey mb-m">web experiences.</h1>
  <Button {onclick}>Let's talk</Button>
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
