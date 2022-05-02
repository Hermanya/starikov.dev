<div class="card">
  <img class="avatar" src="/avatar.png" alt="" height="223" width="180" />
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
    gap: 0rem;
    padding-right: 1rem;
    margin-left: var(--container-padding-left);
    margin-right: var(--container-padding-right);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* color: var(--text-inverted); */
    padding: 1rem 0;
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
    opacity: 0.95;
  }
  img {
    display: block;
    animation: test 0.2s;
  }
  @keyframes test {
    0% {
      filter: blur(10px);
    }
    100% {
      filter: blur(0px);
    }
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
  @media only screen and (min-width: 80ch) {
    .card {
      gap: 2rem;
    }
    section {
      padding: 2rem 0;
    }
    h1 {
      font-size: 3rem;
    }
  }
</style>
