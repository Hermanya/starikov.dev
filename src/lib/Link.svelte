<script>
  export let href = "#";
</script>

<a sveltekit:prefetch {href}><slot /></a>

<style>
  a {
    font-weight: 600;
  }
</style>
