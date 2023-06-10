<template>
    <v-container class="fill-height">
        <v-responsive class="d-flex align-center text-center fill-height">
            <v-sheet color="grey-darken-1" rounded>
                <v-img height="100" src="@/assets/icon.svg" />

                <div class="text-body-2 font-weight-light mb-n1">
                    Welcome to
                </div>

                <h1 class="text-h2 font-weight-bold">Libretime</h1>

                <v-divider
                    :thickness="5"
                    color="white"
                    class="ma-5"
                ></v-divider>

                <h4 class="text-h4 py-2">{{ $t("Getting Started") }}</h4>

                <p class="text-body-1">
                    Use these links to get up and running with Libretime.
                </p>

                <div class="py-14" />

                <v-row class="d-flex align-center justify-center">
                    <v-col cols="auto">
                        <v-btn
                            href="https://vuetifyjs.com/components/all/"
                            min-width="164"
                            rel="noopener noreferrer"
                            target="_blank"
                            variant="text"
                        >
                            <v-icon
                                icon="mdi-view-dashboard"
                                size="large"
                                start
                            />

                            {{ $t("User Manual") }}
                        </v-btn>
                    </v-col>

                    <v-col cols="auto">
                        <v-btn
                            color="primary"
                            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
                            min-width="228"
                            rel="noopener noreferrer"
                            size="x-large"
                            target="_blank"
                            variant="flat"
                        >
                            <v-icon icon="mdi-speedometer" size="large" start />

                            {{ $t("Status") }}
                        </v-btn>
                    </v-col>

                    <v-col cols="auto">
                        <v-btn
                            href="https://libretime.org/"
                            min-width="164"
                            rel="noopener noreferrer"
                            target="_blank"
                            variant="text"
                        >
                            <v-icon
                                icon="mdi-account-group"
                                size="large"
                                start
                            />

                            {{ $t("Help") }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-responsive>
    </v-container>
</template>

<script setup lang="ts"></script>
