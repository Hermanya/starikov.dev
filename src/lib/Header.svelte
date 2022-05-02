<script lang="ts">
</script>

<a sveltekit:prefetch href="/">
  <img
    class="avatar"
    src="/avatar.png"
    height="69"
    width="57"
    alt="Herman Starikov's home page"
    loading="lazy"
  />
</a>

<style>
  a {
    position: sticky;
    top: 1rem;
    left: var(--container-padding-left);
    box-sizing: border-box;
    z-index: 1;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--cyan);
  }
  a:active {
    transition: 0.1s;
    transform: scale(2) translateY(1rem, 2rem);
  }
  img {
    filter: brightness(1.25) drop-shadow(0 0 16px var(--gray3));
    display: flex;
  }
  @media (prefers-color-scheme: dark) {
    a {
      background-color: var(--indigo);
    }
    img {
      filter: drop-shadow(0 0 64px var(--gray6));
    }
  }
  img {
    padding-right: 12px;
  }
</style>
