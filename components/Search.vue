<template>
  <ais-instant-search :search-client="searchClient" index-name="docs">
        <ais-configure
          :attributesToSnippet="['bodyPlainText']"
          :hits-per-page.camel="5"
        >
          <ais-autocomplete v-click-outside="onClickOutside">
            <div slot-scope="{ currentRefinement, indices, refine }" >
              <div class="b r relative overflo-hidden">
                <div class="absolute display-flex justify-center align-center" style="color:rgba(0,0,0,0.12);width:38px; height:38px; left:0; right:0;"  >
                  <i class="material-icons " style="margin:0px auto;">
                    search
                  </i>
                </div>
              <input
              class="input pl-9 py-2 r pr-4 w-12 b-0"
              style="font-size:1rem"
                type="search"
                placeholder="Search"
                :value="currentRefinement"
                @focus="showResults = true"
                @input="refine($event.currentTarget.value)"
                autocomplete="off"
                ref="searchInput"
              />
              </div>
              
              <div
                class="absolute shadow-md r b z-40 bg-white " style="width:300px"
                v-show="currentRefinement.length && showResults"
              >
                <div v-for="section in indices" :key="section.objectID">
                  <template v-if="section.hits.length>0">
                  
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
                      <nuxt-link :to="'/docs/'+hit.category+'/'+hit.objectID" class="list-link w-12">
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
                  <template v-if="section.hits.length==0">
                    <div class="p-4">
                      <p class="bold">No results found</p>
                    </div>
                     </template>

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
import vClickOutside from 'v-click-outside'

export default {
   directives:{
      clickOutside: vClickOutside.directive
  },
  data() {
    return {
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY
      ),
      showResults:false
    };
  },
  
  methods:{
    onClickOutside(){
      this.showResults = false;
    }
  }
};
</script>

<style lang="scss">
.h3 {
  text-transform: uppercase;
}
.search-container {
  background: rgba(0, 0, 0, 25);
}
.input{
  &:focus{
    outline: none;
  }
}
</style>
