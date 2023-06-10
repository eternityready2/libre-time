<template>
    <v-container>
        <v-row>
            <v-col class="v-col-2">
                <LocaleSelect />
            </v-col>
            <v-col>
                <p class="pa-1">{{ $t("You are running the latest version") }}</p>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="v-col-1" />
            <v-col>
                <Welcome />
            </v-col>
            <v-col class="v-col-1" />
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import Welcome from "@/components/Welcome.vue"
import LocaleSelect from "@/components/LocaleSelect.vue";
</script>
