<script lang="ts">
    import type { Writable } from "svelte/store";

    export let label: string;
    export let colorStore: Writable<string>;

    let colors = [
        "pink",
        "blue",
        "green",
        "tomato",
        "gold",
        "salmon",
        "teal",
        "lightgreen",
        "yellow",
    ];
</script>

<div class="body-part">
    <h2>{label}</h2>

    <div class="container">
        {#each colors as color}
            <button
                class:active={$colorStore === color}
                style="background: {color}"
                type="button"
                on:click={() => $colorStore = color}
                class="option"
            />
        {/each}
    </div>
</div>

<style>
    .body-part {
        color: #333;
        background: white;
        border-radius: 3px;
        max-width: 80%;
        overflow-x: scroll;
        white-space: nowrap;
        padding: 10px;
    }

    .container {
        display: flex;
        overflow-x: auto;
        gap: 10px;
    }

    .option {
        border: none;
        min-width: 60px;
        height: 60px;
        border-radius: 6px;
        background: pink;
        cursor: pointer;
    }

    .active {
        border: 2px solid black;
    }
</style>
