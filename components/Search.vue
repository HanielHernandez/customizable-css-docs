<template>
  <ais-instant-search :search-client="searchClient" index-name="components">
        <ais-configure
          :attributesToSnippet="['bodyPlainText']"
          :hits-per-page.camel="5"
        >
          <ais-autocomplete>
            <div slot-scope="{ currentRefinement, indices, refine }" style="max-width: 300px; width:100%;" >
              <input
                class="form-input"
                type="search"
                :value="currentRefinement"
                @input="refine($event.currentTarget.value)"
                autocomplete="off"
                ref="searchInput"
              />
              <div
                class="absolute shadow-md r b"
                v-show="currentRefinement.length"
              >
                <div v-for="section in indices" :key="section.objectID">
                  <div class="h3 mb-0 p-4">
                    {{ section.indexName }}
                  </div>
                  <ul
                    class="list r-0 hoverable list-border"
                    style="border-right-width: 0; border-left-width: 0"
                  >
                    <li
                      class="item"
                      v-for="hit in section.hits"
                      :key="hit.objectID"
                    >
                      <nuxt-link :to="'#'" class="list-link w-12">
                        <div class="col">
                          <ais-highlight
                            attribute="title"
                            :hit="hit"
                            class="text-blue-600 font-medium"
                          />
                          <ais-snippet
                            attribute="bodyPlainText"
                            class="font-sm"
                            style="color: #5f5f5f"
                            :hit="hit"
                          />
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <ais-powered-by class="mb-4 px-4" />
              </div>
            </div>
          </ais-autocomplete>
        </ais-configure>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

export default {
  data() {
    return {
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY
      ),
    };
  },
};
</script>

<style lang="scss">
.h3 {
  text-transform: uppercase;
}
.search-container {
  background: rgba(0, 0, 0, 25);
}
</style>
