<div class="card">
  <img class="avatar" src="/avatar.png" alt="" height="200" width="200" />
  <section>
    <h1>
      <span id="name">Herman</span> Starikov
    </h1>
    <p>Russian-Canadian Web developer at Coursera</p>
    <p>Life-long learner</p>
  </section>
</div>

<style>
  .card {
    display: flex;
    align-items: center;
    border-radius: var(--card-border-radius);
    background-color: var(--cyan);
    overflow: hidden;
    width: 100%;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--text-inverted);
  }
  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
  }
  #name {
    letter-spacing: 1px;
  }
  p {
    margin: 0;
    font-size: 1rem;
    opacity: 0.8;
  }
  img {
    display: block;
  }
  .avatar {
    filter: brightness(1.25) drop-shadow(0 0 16px var(--gray3));
  }
  @media (prefers-color-scheme: dark) {
    .avatar {
      filter: drop-shadow(0 0 64px var(--gray6));
    }
    .card {
      background-color: var(--indigo);
    }
    section {
      /* filter: drop-shadow(0 0 1px var(--text)); */
      color: #fff;
    }
  }
  /* @media only screen and (max-width: 80ch) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    .avatar {
      width: 25%;
      height: auto;
    }
  } */
</style>
