<script lang="ts">
  import { page } from "$app/stores";
</script>

<header>
  <!-- <nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">About</a>
			</li>

			<li class:active={$page.url.pathname === '/notes'}>
				<a sveltekit:prefetch href="/notes">Study notes</a>
			</li>
		</ul>
	</nav> -->
</header>

<style>
  header {
    padding-top: 2rem;
  }
  /* header {
		backdrop-filter: blur(8px);
		background-color: var(--transparent-background);
		position: sticky;
		top: 0;
		padding: 2em 0;
		box-sizing: border-box;
		z-index: 1;
	}

	header ul {
		margin: 0 auto;
		width: 100%;
		max-width: 80ch;
		padding: 0 2em;
		padding-left: max(2em, env(safe-area-inset-left));
		padding-right: max(2em, env(safe-area-inset-right));
		box-sizing: border-box;
		list-style: none;
	}

	ul {
		display: flex;
		gap: 4ch;
	}
	li {
		display: block;
	}
	li.active {
	} */
</style>
