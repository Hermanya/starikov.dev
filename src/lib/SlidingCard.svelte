<section class="card">
  <slot />
</section>

<style>
  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--card-background);
    border-radius: var(--card-border-radius);
    padding: 1rem;
    box-sizing: border-box;
    min-width: 256px;
    max-width: 256px;
    scroll-snap-align: start;
  }
</style>
