<template>
    <div class="file_history_main_container">
        <p>Lista plików:</p>
        <div class="history_table_row" v-for="(fileName,index) in filesList">
            <p> {{ index + 1 + ". " + fileName }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilesHistoryContainer',
    props: {
        filesList: Array
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
.file_history_main_container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>