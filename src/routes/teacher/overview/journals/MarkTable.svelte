<script lang="ts">
    
    const dates = [new Date(0, 0, 30), new Date(0, 1, 1), new Date(0, 1, 2), new Date(0, 1, 3), new Date(0, 1, 4), new Date(0, 1, 5)];
    const students = Array(10).fill(0).map((_, i) => `Student ${i + 1}`);
    let data = new Map<string, Map<Date, string>>();
    students.forEach((s, i) => {
        let m = new Map();
        m.set(dates[i % dates.length], (i % 5) + 1);
        data.set(s, m);
    });

    console.log(data);
    dates.reverse();

</script>

<main>

    <table>

        <!-- Date row -->
        <tr>
            <td class="student-name-cell"></td>

            {#each dates as date, i}

                <td class="date-cell tint">
                    {date.getDate() < 10 ? `0${date.getDate()}` : String(date.getDate())}
                </td>

                {#if i + 1 >= dates.length || dates[i + 1].getMonth() !== date.getMonth()}

                    <!-- Month divider -->
                    {@const monthStr = date.toLocaleString('default', { month:'long' })}

                    <td rowspan="0" style="--content-len: {monthStr.length};">
                        <div>
                            <span class="divider-month-label">{monthStr}</span>
                        </div>
                    </td>

                {/if}
            
            {/each}

        </tr>
    
        <!-- Student rows -->
        {#each students as student, studentIdx}

            {@const marks = data.get(student)}
            {@const studentNumber = studentIdx + 1}

            <tr class={studentIdx % 2 !== 0 ? "tint" : "" }>
                <!-- Student name cell -->
                <!-- (Don't question it) -->
                {#if studentNumber < 10}
                    <td class="student-name-cell">&nbsp;{studentNumber}. {student}</td>
                {:else}
                    <td class="student-name-cell">{studentNumber}. {student}</td>   
                {/if}

                <!-- Mark cells -->
                {#each dates as date}

                    <td class="mark-cell">
                        <div>
                            {marks?.get(date) ?? ""}
                        </div>
                    </td>

                {/each}

            </tr>

        {/each}

    </table>

</main>

<style>

    main {
        --tint: #EFEFEF;

        width: 100%;
        height: 662px;
        border: 1px solid var(--cl-divider);
        overflow: auto;
    }

    table {
        border-collapse: collapse;
    }

    td {
        --cell-width: 65px;
        --cell-height: 50px;

        width: var(--cell-width);
        height: var(--cell-height);
        overflow: hidden;
        font-size: 24px;
        cursor: pointer;
    }

    td:not([rowspan="0"]) > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        border-width: 0;
        border-style: solid none none solid;
        border-color: var(--cl-accent);
        box-sizing: border-box;

        transition:
            border-left-width 0.075s ease,
            border-top-width 0.075s ease;
    }

    td:not([rowspan="0"]):hover > div {
        border-left-width: 2px;
        border-top-width: 2px;
  
        border-bottom-width: 1px;
        border-right-width: 1px;
    }

    .tint {
        background-color: var(--tint);
    }

    .student-name-cell {
        width: 250px;
        color: var(--cl-high-emphasis);
        border-right: 1px solid var(--cl-divider);
    }

    .date-cell,
    .mark-cell {
        color: var(--cl-low-emphasis);
        text-align: center;
    }

    td[rowspan="0"] {
        --divider-line-label-gap: 10px;

        position: relative;
        width: 42px;
        color: var(--cl-low-emphasis);
    }

    td[rowspan="0"]::before {
        content: '';
        position: absolute;
        top: var(--cell-height);
        right: 50%;
        width: 1px;
        height: calc(50% - var(--cell-height) - 0.5ch * var(--content-len) - var(--divider-line-label-gap));
        background-color: var(--cl-divider);
    }
    
    td[rowspan="0"]::after {
        --top: calc(50% + 0.5ch * var(--content-len) + var(--divider-line-label-gap));
        
        content: '';
        position: absolute;
        top: var(--top);
        right: 50%;
        width: 1px;
        height: calc(100% - var(--top) - var(--cell-height));
        background-color: var(--cl-divider);
    }
    
    td[rowspan="0"] > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    td[rowspan="0"] > div > .divider-month-label {
        writing-mode: sideways-lr;
    }

</style>
