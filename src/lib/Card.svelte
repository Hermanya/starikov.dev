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
  }
</style>
