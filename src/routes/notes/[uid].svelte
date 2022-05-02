<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  // see https://kit.svelte.dev/docs#loading
  export const load: Load = async ({ fetch, params }) => {
    const res = await fetch(`/notes/${params.uid.replace(".html", "")}.json`);

    if (res.ok) {
      const note = await res.json();
      const title = note.content.split(">")[1].split("<")[0];
      return {
        props: { note, title },
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message),
    };
  };
  export const prerender = true;
</script>

<script lang="ts">
  import Header from "$lib/Header.svelte";

  export let title: string = "Herman's Notes";
  export let note: { content: string };
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Header />

<article>{@html note.content}</article>

<style>
  article {
    padding-left: var(--container-padding-left);
    padding-right: var(--container-padding-right);
    max-width: var(--max-container-width);
  }
</style>
