<script lang="ts">
</script>

<header>
  <a sveltekit:prefetch href="/">
    <img
      class="avatar"
      src="/avatar.png"
      height="69"
      width="57"
      alt="Herman Starikov's home page"
    />
  </a>
</header>

<style>
  header {
    position: sticky;
    top: 1rem;
    box-sizing: border-box;
    z-index: 100;
    transform: translateZ(10px);
    backdrop-filter: blur(8px);
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--transparent-background);
  }
  a {
    display: flex;
  }
  img {
    padding-right: 12px;
  }
</style>
