<script>
  export let href = "#";
</script>

<a sveltekit:prefetch {href}><slot /></a>

<style>
  a {
    background: var(--blue);
    color: var(--background);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-weight: 600;
  }
  a:visited {
    background: var(--purple);
  }
</style>
