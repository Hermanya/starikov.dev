<script context="module" lang="ts">
  // import type { Load } from "@sveltejs/kit";

  // // see https://kit.svelte.dev/docs#loading
  // export const load: Load = async ({ fetch, params }) => {
  //   const res = await fetch(`/notes/${params.uid}.json`);

  //   if (res.ok) {
  //     const course = await res.json();
  //     return {
  //       props: { course },
  //     };
  //   }

  //   const { message } = await res.json();

  //   return {
  //     error: new Error(message),
  //   };
  // };
  export const prerender = true;
</script>

<script lang="ts">
  type Course = {
    name: string;
    completion: string;
    cert: string;
    instructor: string;
    notes: { topic: string; quote: string; source: string; note?: string }[];
  };
  import recentCourses from "../../learning-notes";
  import lifeAfterCovid from "../../learning-notes/life-after-covid.json";
  export const course: Course = {
    ...recentCourses[0],
    notes: lifeAfterCovid.notes,
  };

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
          <div class="note">
            <figure>
              <blockquote>
                {note.quote}
              </blockquote>
              <figcaption>
                <cite
                  >— <a href={note.source}>{course.instructor || "Source"}</a
                  ></cite
                >
              </figcaption>
            </figure>

            {#if note.note}
              <div class="my-note">{note.note}</div>
            {/if}
          </div>
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

  .note {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--card-background);
    border-radius: var(--card-border-radius);
    padding: 1rem;
  }
  .notes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  figure {
    /* border-left: 0.25rem solid var(--cyan); */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: var(--card-border-radius);
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before,
  blockquote::after {
    color: var(--gray);
    line-height: 1rem;
    transform: scale(6);
    position: absolute;
    opacity: 0.2;
  }
  blockquote:before {
    content: "\201C";
    transform: translate(-1rem, 0rem) scale(4);
  }

  blockquote:after {
    content: "”";
    transform: translate(1rem, 1rem) scale(4);
    right: 1.5rem;
  }

  blockquote,
  figure,
  h2 {
    margin: 0;
  }
  h2 {
    margin-top: 1rem;
  }
  a {
    font-weight: 600;
  }

  .my-note {
    border-left: 4px solid var(--yellow);
    padding: 1rem;
  }
</style>
