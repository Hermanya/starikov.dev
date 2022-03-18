<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import recentCourses from "../learning-notes";
  import PersonalCard from "$lib/PersonalCard.svelte";
  import Card from "$lib/Card.svelte";
  import CardActions from "$lib/CardActions.svelte";
  import LinkButton from "$lib/LinkButton.svelte";
  import Link from "$lib/Link.svelte";
</script>

<svelte:head>
  <title>Hello from Herman</title>
</svelte:head>

<div class="container">
  <PersonalCard />
  <h2>Courses I recently completed</h2>
  <section class="grid">
    {#each recentCourses as course}
      <Card>
        <h3 class="courseName">{course.name}</h3>
        <p class="completed">Completed in {course.completion}</p>
        <CardActions>
          <Link href={course.cert}>Certificate</Link>
          <LinkButton href={`/study-notes/${course.id}.html`}
            >Study notes</LinkButton
          >
        </CardActions>
      </Card>
    {/each}
  </section>
  <h2>Other note-worthy things</h2>
  <section class="grid">
    <Card>
      <h3 class="courseName">Résumé</h3>
      <p class="completed">Published in March 2022</p>
      <CardActions>
        <LinkButton href={`/notes/resume.html`}>View</LinkButton>
      </CardActions>
    </Card>
    <Card>
      <h3 class="courseName">Inspiring personal websites</h3>
      <p class="completed">Published in March 2022</p>
      <CardActions>
        <LinkButton href={`/notes/inspiring-personal-websites.html`}
          >View</LinkButton
        >
      </CardActions>
    </Card>
  </section>
</div>

<style>
  .container {
    padding-top: 1rem;
  }
  h2 {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  @media only screen and (min-width: 80ch) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .courseName {
    margin: 0;
    line-height: 1.5;
  }

  .completed {
    margin: 0;
    color: var(--gray);
  }
</style>
