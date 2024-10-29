<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    onclick: (e?: MouseEvent) => void;
    className?: string;
  }

  let { children, onclick, className, ...props }: Props = $props();
</script>

<button class={`btn ${className}`} {...props} {onclick}
  >{@render children()}
</button>

<style>
  .btn {
    font-family: "Inter Tight", sans-serif;
    font-weight: 500;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2.5rem;
    border-radius: 10px;
  }

  .nav-bar {
    padding: 10px 24px;
    font-size: 20px;
  }
</style>
