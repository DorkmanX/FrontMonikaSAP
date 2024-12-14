<template>
    <div class="history_main_container">
        <div class="history_data_table_div">
            <div class="history_row"> 
                <div class="history_column"> Numer zlecenia </div>
                <div class="history_column"> Formuła </div>
                <div class="history_column"> Cena </div>
                <div class="history_column"> Uzasadnienie </div>
            </div>
            <div class="history_row" v-for="(historyRow,index) in historyTable">
                <div class="history_column"> <p> {{ historyRow.name }} </p> </div>
                <div class="history_column"> <p> {{ historyRow.formula }} </p> </div>
                <div class="history_column"> <p> {{ historyRow.result }} </p> </div>
                <div class="history_column"> <p> {{ historyRow.reason }} </p> </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalculationsHistory',
    props: {
        historyTable: Array
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
.history_main_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.history_data_table_div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.history_row {
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 1px;
    border-color: aqua;
    width: 100%;
    height: 100%;
}
.history_column{
    display: flex;
    border-right-style: solid;
    border-right-width: 1px;
    border-color: aqua;
    font: 20px white bold;
    flex: 1;
    align-items: center;
    justify-content: center;
}
</style>