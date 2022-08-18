<script>
  import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>
<p>Sorry!</p>
<a href="/">Back to Home</a>