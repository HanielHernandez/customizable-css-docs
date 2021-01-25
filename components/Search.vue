Copy
<template>
  <ais-instant-search :search-client="searchClient" index-name="instant_search">
    <ais-search-box />
    <ais-stats />
    <ais-refinement-list attribute="brand" />
    <ais-hits>
      <template slot="item" slot-scope="{ item }">
        <p>
          <ais-highlight attribute="name" :hit="item" />
        </p>
        <p>
          <ais-highlight attribute="brand" :hit="item" />
        </p>
      </template>
    </ais-hits>
    <ais-pagination />
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
const searchClient = algoliasearch(
  "FO1LGVRID6",
  "70c231d8688e6141f0646134cc406bc4"
);

export default {
  data() {
    return {
      searchClient
    };
  }
};
</script>
