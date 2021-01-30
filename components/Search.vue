<template>
  <ais-instant-search :search-client="searchClient" index-name="components">
    <ais-configure
      :attributesToSnippet="['bodyPlainText']"
      :hits-per-page.camel="5"
    >
      <ais-index index-name="layouts" />
      <ais-index index-name="forms" />
      <ais-index index-name="utilities" />
      <ais-autocomplete v-click-outside="onClickOutside">
        <div slot-scope="{ currentRefinement, indices, refine }">
          <div
            class="shadow-sm search-group b b-w-2 hover:b-w-2 hover:b-blue-600 r-2 relative overflow-hidden"
          >
            <div
              class="absolute display-flex justify-center align-center"
              style="color:rgba(0,0,0,0.12);width:38px; height:38px; left:0; right:0;"
            >
              <i class="material-icons " style="margin:0px auto;">
                search
              </i>
            </div>
            <input
              class="input pl-9 py-2 r pr-4 w-12 b-0"
              style="font-size:1rem"
              type="search"
              placeholder="Quick Search "
              :value="currentRefinement"
              @focus="showResults = true"
              @input="refine($event.currentTarget.value)"
              autocomplete="off"
              ref="searchInput"
            />
          </div>

          <div
            class="absolute shadow-md r b z-40 bg-white overflow-y-auto "
            style=" min-width: 300px;max-width:450px;max-height: 400px;"
            v-show="currentRefinement.length && showResults"
          >
            <div v-for="section in indices" :key="section.objectID">
              <template v-if="section.hits.length > 0">
                <div class="h3 mb-0 p-4">
                  {{ section.indexName }}
                </div>
                <ul
                  class="list r-0 mb-0 hoverable list-border"
                  style="border-right-width: 0; border-left-width: 0"
                >
                  <li
                    class="item"
                    v-for="hit in section.hits"
                    :key="hit.objectID"
                  >
                    <nuxt-link
                      :to="'/docs/' + hit.category + '/' + hit.objectID"
                      class="list-link w-12"
                    >
                      <div class="col">
                        <ais-highlight
                          attribute="title"
                          :hit="hit"
                          class="text-blue-600 font-medium"
                        />
                        <ais-snippet
                          attribute="bodyPlainText"
                          class="font-sm truncate"
                          style="color: #5f5f5f"
                          :hit="hit"
                        />
                      </div>
                    </nuxt-link>
                  </li>
                </ul>
              </template>
            </div>
            <template v-if="groupIndex(indices).length == 0">
              <div class="p-4">
                <p class="bold mb-0">No results found</p>
              </div>
            </template>
            <ais-powered-by class="p-2" />
          </div>
        </div>
      </ais-autocomplete>
    </ais-configure>
  </ais-instant-search>
   
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";
import vClickOutside from "v-click-outside";
import { VueAutosuggest } from "vue-autosuggest";

export default {
  components: {
    VueAutosuggest
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY
      ),
      showResults: false
    };
  },
  mounted(){
    this.$nextTick(()=>{
      window.addEventListener('keydown',(event)=>{
          if(event.ctrlKey  && event.key === 'k'){
              this.$refs.searchInput.focus();
              event.preventDefault();
          }
      })
    })
  },
  methods: {
    onClickOutside() {
      this.showResults = false;
    },
    onSelect(selected) {
      if (selected) {
        this.query = selected.item.name;
      }
    },
    groupIndex(indices) {
      let hits =  [];
      indices.forEach(index => {
        hits = [...hits,...index.hits]
      });
      return hits
    }
  }
};
</script>

<style lang="scss">
.h3 {
  text-transform: uppercase;
}
.search-group {
}
.input {
  &:focus {
    outline: none;
  }
}
</style>
