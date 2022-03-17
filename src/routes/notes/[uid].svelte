<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  // see https://kit.svelte.dev/docs#loading
  export const load: Load = async ({ fetch, params }) => {
    const res = await fetch(`/notes/${params.uid.replace(".html", "")}.json`);

    if (res.ok) {
      const course = await res.json();
      return {
        props: { course },
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
  import Card from "$lib/Card.svelte";
  import CardActions from "$lib/CardActions.svelte";

  type Course = {
    name: string;
    completion: string;
    cert: string;
    instructor: string;
    notes: { topic: string; quote: string; source: string; note?: string }[];
  };

  export let course: Course;

  export let groupedNotes: {
    topic: string;
    instructor: string;
    notes: { quote: string; source: string; note: string }[];
  }[] = course.notes.reduce((acc, note) => {
    const topic = note.topic;
    const topicNotes = acc.find((t) => t.topic === topic);

    if (topicNotes) {
      topicNotes.notes.push(note);
    } else {
      acc.push({ topic, notes: [note] });
    }

    return acc;
  }, []);
</script>

<svelte:head>
  <title>Herman's Learning Notes</title>
</svelte:head>

<div>
  <header>
    <h1>{course.name}</h1>
    <div>
      These are my notes from this Coursera course I completed in {course.completion}.
    </div>
  </header>
  <section class="notes">
    {#each groupedNotes as group}
      <h2>{group.topic}</h2>
      <div class="notes">
        {#each group.notes as note}
          <Card>
            <blockquote cite={note.source}>
              {note.quote}
            </blockquote>

            {#if note.note}
              <div class="my-note">{note.note}</div>
            {/if}
            <CardActions>
              <a href={note.source}>Source</a>
            </CardActions>
          </Card>
        {/each}
      </div>
    {/each}
    <a href={course.cert}>Certificate</a>
  </section>
</div>

<style>
  header {
    margin-bottom: 1rem;
  }

  .notes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  blockquote {
    font-style: italic;
    position: relative;
    border-left: 4px solid var(--yellow);
    padding: 0 1rem;
  }

  blockquote,
  h2 {
    margin: 0;
  }
  h2 {
    margin-top: 1rem;
  }
  a {
    font-weight: 600;
  }
</style>
