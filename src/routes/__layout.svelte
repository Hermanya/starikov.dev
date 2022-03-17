<script lang="ts">
  import Header from "$lib/header/Header.svelte";
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <h2>My links</h2>
  <ul>
    <li>
      <a href="https://twitter.com/Starikov_dev">Twitter</a>
    </li>
    <li>
      <a href="https://www.coursera.org/user/fed7ba97abb24a83aa7621d94f756d6b"
        >Coursera</a
      >
    </li>
    <li>
      <a href="https://github.com/hermanya">Github</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/users/7228427/herman-starikov"
        >StackOverflow</a
      >
    </li>
    <li>
      <a href="https://codepen.io/Hermanya">Codepen</a>
    </li>
    <li>
      <a href="https://www.producthunt.com/@hermanhasawish/submitted"
        >ProductHunt</a
      >
    </li>
  </ul>
</footer>

<style>
  h2 {
    padding-left: 1rem;
  }

  main,
  footer {
    margin: 0 auto;
    width: 100%;
    max-width: 80ch;
    padding-left: max(2em, env(safe-area-inset-left));
    padding-right: max(2em, env(safe-area-inset-right));
    box-sizing: border-box;
  }
  footer {
    margin-top: auto;
    padding: 1em 2em;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2ch;
    padding: 0;
    padding-left: 1rem;
  }
  ul li {
    display: block;
    font-weight: 600;
  }
</style>
