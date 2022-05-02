<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import recentCourses from "../learning-notes";
  import PersonalCard from "$lib/PersonalCard.svelte";
  import SlidingCard from "$lib/SlidingCard.svelte";
  import CardActions from "$lib/CardActions.svelte";
  import LinkButton from "$lib/LinkButton.svelte";
  import Link from "$lib/Link.svelte";

  const blog = [
    {
      title: "My Personal Website Stack 2022",
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
      title: "8 Inspiring Personal Websites",
      month: "March",
      year: 2022,
      link: "/notes/inspiring-personal-websites.html",
    },
    {
      title: "6 Favorite Playlists",
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
  <h2>{recentCourses.length} Courses I recently completed</h2>
  <section class="grid">
    {#each recentCourses as course}
      <SlidingCard>
        <h3 class="courseName">{course.name}</h3>
        <p class="completed">Completed in {course.completion}</p>
        <CardActions>
          <Link href={course.cert}>Certificate</Link>
          <LinkButton href={`/study-notes/${course.id}.html`}
            >Study notes</LinkButton
          >
        </CardActions>
      </SlidingCard>
    {/each}
  </section>
  <h2>{blog.length} other note-worthy things</h2>
  <section class="grid">
    {#each blog as post}
      <SlidingCard>
        <h3 class="courseName">{post.title}</h3>
        <p class="completed">Last updated in {post.month} {post.year}</p>
        <CardActions>
          <LinkButton href={post.link}>View</LinkButton>
        </CardActions>
      </SlidingCard>
    {/each}
  </section>
</div>

<style>
  .container {
    padding-top: 1rem;
  }
  h2 {
    font-size: 1.25rem;
    padding-left: 1rem;
    padding-top: 1rem;
    margin-left: var(--container-padding-left);
    margin-right: var(--container-padding-right);
  }

  .grid {
    scroll-snap-type: x mandatory;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    gap: 1rem;
    margin-top: 1rem;
    scroll-padding-left: var(--container-padding-left);
    padding-left: var(--container-padding-left);
    scroll-padding-right: var(--container-padding-right);
    padding-right: var(--container-padding-right);
  }

  .courseName {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.25;
  }

  .completed {
    margin: 0;
    color: var(--gray);
  }
</style>
