<script>
  import YouTubeEmbed from "$lib/components/YouTubeEmbed.svelte";
  import DonLogoLight from "$lib/svg/DonLogoLight.svelte";
</script>

<h1>Video Games</h1>

<h2 class="logo-header"><DonLogoLight /></h2>
<YouTubeEmbed source="https://youtube.com/embed/EX5pqTMwhQQ" />
<a class="external-link" href="https://store.steampowered.com/app/2571840/Defense_of_Nations/" target="_blank">
  Play the Demo on Steam!
</a>
<p>
  A base defense shooter in the vein of flash game classics like <em>Elona Shooter</em> and <em>Defend Your Castle</em> but with a
  satirical, political-sim twist. Shoot hordes of monsters, negotiate your operating budget, and navigate international
  rivalries, all for <strong>The Good of Humanity™️</strong>!
</p>

<h2>Sprout</h2>
<p>
  A short game I worked on with a team for a college class. It's a puzzle platformer with the goal
  to bring life to a dead world. It only consists of four puzzles, but all around I think it turned
  out pretty well for the &lt; 7 weeks we had to work on it.
</p>
<a class="external-link" href="https://teamd4d.itch.io/sprout" target="_blank">
  Playable from Itch.io
</a>
<YouTubeEmbed source="https://www.youtube.com/embed/fYB8DbCyCFk" />

<h1>Tabletop + Other</h1>

<h2>Othnell</h2>
<p>
  A pen-and-paper RPG ruleset and accompanying Ancient Fantasy setting that I've been working on.
  The goal of the ruleset is to create an RPG that makes the narrative aspects of an RPG just as
  much of a game as the combat and exploration, but to do so in a way that doesn't make restricted
  in what they can do narratively.
</p>
<a class="external-link" href="https://othnell.com" target="_blank">
  Link to the Ruleset
</a>
<p>
  The rules themselves will include all of the actual design notes and intentions, but as an
  example, there's a mechanic called the "memory pull" in which the Game Master can make players
  play a very short card game to determine if their characters can understand or recall an important
  piece of information, and they get an advantage based on their characters' stats.
</p>

<style lang="sass">
  h1
    margin-top: 1.6in
    padding: 0 12px
    font-size: 2.2em
    color: v.$skyb-2
    @media (min-width: v.$tablet-width)
      font-size: 2.6em

  h2
    box-sizing: border-box
    margin: 6ex 0 0 0
    padding: 0 12px
    font-size: 1.6em
    color: v.$skyb-1
    h1 + &
      margin-top: 1ex
    @media (min-width: v.$tablet-width)
      font-size: 2.0em

  p
    margin: 1ex 0 2ex 0
    padding: 0 12px
    line-height: 1.5
    
  .logo-header
    width: 100%
    padding-right: 12px

  .external-link
    align-self: center
    margin: 1ex 0 2ex 0
    padding: 1ch 1ex
    text-decoration: none
    color: v.$dark-fg
    background-color: v.$royl-3
    border-radius: 6px
    transition: all 0.2s

    &:hover, &:focus
      background-color: v.$royl-2
</style>
