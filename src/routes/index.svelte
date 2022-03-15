<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import recentCourses from "../learning-notes";
  import PersonalCard from "$lib/PersonalCard.svelte";
</script>

<svelte:head>
  <title>Hello from Herman</title>
</svelte:head>

<section>
  <PersonalCard />
  <h2>Courses I recently completed</h2>
  <section class="courses">
    {#each recentCourses as course}
      <div class="course">
        <h3 class="courseName">{course.name}</h3>
        <p class="completed">Completed in {course.completion}</p>
        <section class="buttons">
          <a href={course.cert}>Certificate</a>
          <a sveltekit:prefetch href={`/notes/${course.id}.html`} class="button"
            >View my notes</a
          >
        </section>
      </div>
    {/each}
  </section>
</section>

<style>
  h2 {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .courses {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 80ch) {
    .courses {
      grid-template-columns: 1fr 1fr;
    }
  }

  .course {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--card-background);
    border-radius: var(--card-border-radius);
    padding: 1rem;
  }

  .courseName {
    margin: 0;
    line-height: 1.5;
  }

  .completed {
    margin: 0;

    color: var(--gray);
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: auto;
  }

  .button {
    background: var(--blue);
    color: var(--background);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }
  .button:visited {
    background: var(--purple);
  }

  a {
    font-weight: 600;
  }
</style>
