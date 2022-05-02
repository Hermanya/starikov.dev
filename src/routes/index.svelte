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

  const blog = [
    {
      title: "Personal website stack 2022",
      month: "May",
      year: 2022,
      link: "/notes/personal-website-stack-2022.html",
    },
    {
      title: "Résumé",
      month: "March",
      year: 2022,
      link: "/notes/resume.html",
    },
    {
      title: "8 inspiring personal websites",
      month: "March",
      year: 2022,
      link: "/notes/inspiring-personal-websites.html",
    },
    {
      title: "6 favorite playlists",
      month: "March",
      year: 2022,
      link: "/notes/favorite-playlists.html",
    },
  ];
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
    {#each blog as post}
      <Card>
        <h3 class="courseName">{post.title}</h3>
        <p class="completed">Last updated in {post.month} {post.year}</p>
        <CardActions>
          <LinkButton href={post.link}>View</LinkButton>
        </CardActions>
      </Card>
    {/each}
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

  @media only screen and (min-width: 120ch) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media only screen and (min-width: 160ch) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr 1fr;
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
