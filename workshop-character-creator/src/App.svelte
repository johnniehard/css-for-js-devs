<script lang="ts">
  import BodyPart from "./BodyPart.svelte";

  let hatColor: string = "pink";
  let headColor = "red";
  let bodyColor = "salmon";
  let legsColor = "green";
</script>

<div class="wrapper">
  <div class="controls-wrapper">
    <h1>Skapa din göbbe</h1>

    <p>Välj och vraka bland armar, ben och hattar.</p>

    <div class="settings">
      <BodyPart currentColor={hatColor} setColor={(color) => hatColor = color} label={"Hatt"} />
      <BodyPart currentColor={headColor} setColor={(color) => headColor = color} label={"Huvud"} />
      <BodyPart currentColor={bodyColor} setColor={(color) => bodyColor = color} label={"Kropp"} />
      <BodyPart currentColor={legsColor} setColor={(color) => legsColor = color} label={"Ben"} />
    </div>
  </div>

  <div class="character-wrapper">
    <div class="character">
      <div class="body-part" style="background: {hatColor}" />
      <div class="body-part" style="background: {headColor}" />
      <div class="body-part" style="background: {bodyColor}" />
      <div class="body-part" style="background: {legsColor}" />
    </div>
  </div>
</div>

<style>


  .body-part {
    width: 100%;
    height: 25%;
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.4);
    transition: background 1s ease;
  }

  .body-part:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .body-part:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  :global(body) {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
  }

  .wrapper {
    max-width: 100rem;
    margin: 0 auto;
    padding-top: 2000px;
    padding-bottom: 10000px;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .controls-wrapper {
    color: white;
    padding: 20px;
    background: steelblue;
    border-radius: 6px;
    width: 40rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .settings {
    display: flex;
    flex-direction: column;

    gap: 30px;
  }

  .character-wrapper {
    background: rgba(0, 0, 0, 0);

    position: relative;
    display: flex;
    align-items: end;

    height: 1000px;
  }

  .character {
    background: rgba(0, 0, 0, 0);

    position: sticky;
    margin-left: 10rem;
    bottom: 30vh;
    width: 300px;
    height: 600px;
  }
</style>
