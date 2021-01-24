<template>
  <div>
    <h4 class="text-grey-900" id="breakpoints">
      Break points
    </h4>
    <p class="mb-4 w-12">
      You can use breakpoints in order to change the width of a column on
      diferent devices
    </p>

    <table class="table">
      <thead>
        <tr>
          <th>Prefix</th>
          <th>Container width</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            xl
          </td>
          <td>
            <b> > 1280px </b>
          </td>
          <td>
            col-w-xl-3
          </td>
        </tr>
        <tr>
          <td>
            lg
          </td>
          <td>
            <b> res > 1024 </b>
          </td>
          <td>
            col-w-lg-4
          </td>
        </tr>
        <tr>
          <td>
            md
          </td>
          <td>
            <b> res > 768px </b>
          </td>
          <td>
            col-w-md-6
          </td>
        </tr>
        <tr>
          <td>
            sm
          </td>
          <td>
            <b> res > 576px </b>
          </td>
          <td>
            col-w-xl-12
          </td>
        </tr>
        <tr>
          <td>
            none
          </td>
          <td>
            <b> &gt; 576px default </b>
          </td>
          <td>
            col-3
          </td>
        </tr>
      </tbody>
    </table>

    <div class="row bg-grey-200 p-4 mb-4">
      <div class="col b p-4 bg-grey-400 col-w-sm-12  col-w-md-6 ">
        I'm a half width on md+ screen, but full width on sm - screen
      </div>
      <div class="col b p-4 bg-grey-400  col-w-12  col-w-md-6 col-w-lg-4 ">
        I'm 1/3 width on lg+ , I'm half on md and full on sm
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "doc",
  head() {
    return {
      title: "Customizable Css - Breakpoints",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css breapoints"
        }
      ]
    };
  }
};
</script>

<style></style>
