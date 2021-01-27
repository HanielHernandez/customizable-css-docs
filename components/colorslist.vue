<template>
  <div class="row mb-4">
    <div
      class="col col-w-12 col-md-4 col-w-lg-4 col-w-md-3"
      v-for="color in colors"
      :key="color.name"
    >
      <p class="bold p-4 mb-0">{{ color.name }}</p>

      <div
        class="p-4 row justify-start align-center"
        v-for="variant in color.variants"
        :key="color.name + variant.name"
        :style="{
          backgroundColor: variant.variant,
          color: getFontColor(variant.name),
        }"
      >
        <p class="mb-0 mr-4">
          {{ color.name + "-" + variant.name }}:
          <span class="font-medium">{{ variant.variant }}</span>
        </p>
      </div>
    </div>

    <!--table class="table table-full table-with-border">
        <thead>
          <tr>
            <th>
              Color
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="color in colors" :key="color.name">
            <td class="font-medium">
              {{color.name}}:
            </td>
            <td class="font-medium">
              50
            </td>
            <td class="font-medium">
              100
            </td>
            <td class="font-medium">
              200
            </td>
            <td class="font-medium">
              300
            </td>

            <td class="font-medium">
              400
            </td>
            <td class="font-medium">
              500
            </td>
            <td class="font-medium">
              600
            </td>
            <td class="font-medium">
              700
            </td>
 <td class="font-medium">
              800
            </td>
             <td class="font-medium">
              700
            </td>
             <td class="font-medium">
              a00
            </td>
            <td
             v-for="variant in color.variants"
          :key="color.name + variant.name"
             :style="{ backgroundColor: variant.variant}">
                <span class="font-medium" :style="{color:getFontColor(variant.name)}">
                  {{ variant.variant }}
                </span>
            </td>
          </tr>
        </tbody>
      </table!-->
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      colors: [
        {
          name: "red",
          variants: [
            {
              name: "50",
              variant: "#ffebee",
            },
            {
              name: "100",
              variant: "#ffcdd2",
            },
            {
              name: "200",
              variant: "#ef9a9a",
            },
            {
              name: "300",
              variant: "#e57373",
            },
            {
              name: "400",
              variant: "#ef5350",
            },
            {
              name: "500",
              variant: "#f44336",
            },
            {
              name: "600",
              variant: "#e53935",
            },
            {
              name: "700",
              variant: "#d32f2f",
            },
            {
              name: "800",
              variant: "#c62828",
            },
            {
              name: "900",
              variant: "#b71c1c",
            },
            {
              name: "a100",
              variant: "#ff8a80",
            },
            {
              name: "a200",
              variant: "#ff5252",
            },
            {
              name: "a400",
              variant: "#ff1744",
            },
            {
              name: "a700",
              variant: "#d50000",
            },
          ],
        },
        {
          name: "pink",
          variants: [
            {
              name: "50",
              variant: "#fce4ec",
            },
            {
              name: "100",
              variant: "#f8bbd0",
            },
            {
              name: "200",
              variant: "#f48fb1",
            },
            {
              name: "300",
              variant: "#f06292",
            },
            {
              name: "400",
              variant: "#ec407a",
            },
            {
              name: "500",
              variant: "#e91e63",
            },
            {
              name: "600",
              variant: "#d81b60",
            },
            {
              name: "700",
              variant: "#c2185b",
            },
            {
              name: "800",
              variant: "#ad1457",
            },
            {
              name: "900",
              variant: "#880e4f",
            },
            {
              name: "a100",
              variant: "#ff80ab",
            },
            {
              name: "a200",
              variant: "#ff4081",
            },
            {
              name: "a400",
              variant: "#f50057",
            },
            {
              name: "a700",
              variant: "#c51162",
            },
          ],
        },
        {
          name: "purple",
          variants: [
            {
              name: "50",
              variant: "#f3e5f5",
            },
            {
              name: "100",
              variant: "#e1bee7",
            },
            {
              name: "200",
              variant: "#ce93d8",
            },
            {
              name: "300",
              variant: "#ba68c8",
            },
            {
              name: "400",
              variant: "#ab47bc",
            },
            {
              name: "500",
              variant: "#9c27b0",
            },
            {
              name: "600",
              variant: "#8e24aa",
            },
            {
              name: "700",
              variant: "#7b1fa2",
            },
            {
              name: "800",
              variant: "#6a1b9a",
            },
            {
              name: "900",
              variant: "#4a148c",
            },
            {
              name: "a100",
              variant: "#ea80fc",
            },
            {
              name: "a200",
              variant: "#e040fb",
            },
            {
              name: "a400",
              variant: "#d500f9",
            },
            {
              name: "a700",
              variant: "#aa00ff",
            },
          ],
        },
        {
          name: "deep-purple",
          variants: [
            {
              name: "50",
              variant: "#ede7f6",
            },
            {
              name: "100",
              variant: "#d1c4e9",
            },
            {
              name: "200",
              variant: "#b39ddb",
            },
            {
              name: "300",
              variant: "#9575cd",
            },
            {
              name: "400",
              variant: "#7e57c2",
            },
            {
              name: "500",
              variant: "#673ab7",
            },
            {
              name: "600",
              variant: "#5e35b1",
            },
            {
              name: "700",
              variant: "#512da8",
            },
            {
              name: "800",
              variant: "#4527a0",
            },
            {
              name: "900",
              variant: "#311b92",
            },
            {
              name: "a100",
              variant: "#b388ff",
            },
            {
              name: "a200",
              variant: "#7c4dff",
            },
            {
              name: "a400",
              variant: "#651fff",
            },
            {
              name: "a700",
              variant: "#6200ea",
            },
          ],
        },
        {
          name: "indigo",
          variants: [
            {
              name: "50",
              variant: "#e8eaf6",
            },
            {
              name: "100",
              variant: "#c5cae9",
            },
            {
              name: "200",
              variant: "#9fa8da",
            },
            {
              name: "300",
              variant: "#7986cb",
            },
            {
              name: "400",
              variant: "#5c6bc0",
            },
            {
              name: "500",
              variant: "#3f51b5",
            },
            {
              name: "600",
              variant: "#3949ab",
            },
            {
              name: "700",
              variant: "#303f9f",
            },
            {
              name: "800",
              variant: "#283593",
            },
            {
              name: "900",
              variant: "#1a237e",
            },
            {
              name: "a100",
              variant: "#8c9eff",
            },
            {
              name: "a200",
              variant: "#536dfe",
            },
            {
              name: "a400",
              variant: "#3d5afe",
            },
            {
              name: "a700",
              variant: "#304ffe",
            },
          ],
        },
        {
          name: "blue",
          variants: [
            {
              name: "50",
              variant: "#e3f2fd",
            },
            {
              name: "100",
              variant: "#bbdefb",
            },
            {
              name: "200",
              variant: "#90caf9",
            },
            {
              name: "300",
              variant: "#64b5f6",
            },
            {
              name: "400",
              variant: "#42a5f5",
            },
            {
              name: "500",
              variant: "#2196f3",
            },
            {
              name: "600",
              variant: "#1e88e5",
            },
            {
              name: "700",
              variant: "#1976d2",
            },
            {
              name: "800",
              variant: "#1565c0",
            },
            {
              name: "900",
              variant: "#0d47a1",
            },
            {
              name: "a100",
              variant: "#82b1ff",
            },
            {
              name: "a200",
              variant: "#448aff",
            },
            {
              name: "a400",
              variant: "#2979ff",
            },
            {
              name: "a700",
              variant: "#2962ff",
            },
          ],
        },
        {
          name: "light-blue",
          variants: [
            {
              name: "50",
              variant: "#e1f5fe",
            },
            {
              name: "100",
              variant: "#b3e5fc",
            },
            {
              name: "200",
              variant: "#81d4fa",
            },
            {
              name: "300",
              variant: "#4fc3f7",
            },
            {
              name: "400",
              variant: "#29b6f6",
            },
            {
              name: "500",
              variant: "#03a9f4",
            },
            {
              name: "600",
              variant: "#039be5",
            },
            {
              name: "700",
              variant: "#0288d1",
            },
            {
              name: "800",
              variant: "#0277bd",
            },
            {
              name: "900",
              variant: "#01579b",
            },
            {
              name: "a100",
              variant: "#80d8ff",
            },
            {
              name: "a200",
              variant: "#40c4ff",
            },
            {
              name: "a400",
              variant: "#00b0ff",
            },
            {
              name: "a700",
              variant: "#0091ea",
            },
          ],
        },
        {
          name: "cyan",
          variants: [
            {
              name: "50",
              variant: "#e0f7fa",
            },
            {
              name: "100",
              variant: "#b2ebf2",
            },
            {
              name: "200",
              variant: "#80deea",
            },
            {
              name: "300",
              variant: "#4dd0e1",
            },
            {
              name: "400",
              variant: "#26c6da",
            },
            {
              name: "500",
              variant: "#00bcd4",
            },
            {
              name: "600",
              variant: "#00acc1",
            },
            {
              name: "700",
              variant: "#0097a7",
            },
            {
              name: "800",
              variant: "#00838f",
            },
            {
              name: "900",
              variant: "#006064",
            },
            {
              name: "a100",
              variant: "#84ffff",
            },
            {
              name: "a200",
              variant: "#18ffff",
            },
            {
              name: "a400",
              variant: "#00e5ff",
            },
            {
              name: "a700",
              variant: "#00b8d4",
            },
          ],
        },
        {
          name: "teal",
          variants: [
            {
              name: "50",
              variant: "#e0f2f1",
            },
            {
              name: "100",
              variant: "#b2dfdb",
            },
            {
              name: "200",
              variant: "#80cbc4",
            },
            {
              name: "300",
              variant: "#4db6ac",
            },
            {
              name: "400",
              variant: "#26a69a",
            },
            {
              name: "500",
              variant: "#009688",
            },
            {
              name: "600",
              variant: "#00897b",
            },
            {
              name: "700",
              variant: "#00796b",
            },
            {
              name: "800",
              variant: "#00695c",
            },
            {
              name: "900",
              variant: "#004d40",
            },
            {
              name: "a100",
              variant: "#a7ffeb",
            },
            {
              name: "a200",
              variant: "#64ffda",
            },
            {
              name: "a400",
              variant: "#1de9b6",
            },
            {
              name: "a700",
              variant: "#00bfa5",
            },
          ],
        },
        {
          name: "green",
          variants: [
            {
              name: "50",
              variant: "#e8f5e9",
            },
            {
              name: "100",
              variant: "#c8e6c9",
            },
            {
              name: "200",
              variant: "#a5d6a7",
            },
            {
              name: "300",
              variant: "#81c784",
            },
            {
              name: "400",
              variant: "#66bb6a",
            },
            {
              name: "500",
              variant: "#4caf50",
            },
            {
              name: "600",
              variant: "#43a047",
            },
            {
              name: "700",
              variant: "#388e3c",
            },
            {
              name: "800",
              variant: "#2e7d32",
            },
            {
              name: "900",
              variant: "#1b5e20",
            },
            {
              name: "a100",
              variant: "#b9f6ca",
            },
            {
              name: "a200",
              variant: "#69f0ae",
            },
            {
              name: "a400",
              variant: "#00e676",
            },
            {
              name: "a700",
              variant: "#00c853",
            },
          ],
        },
        {
          name: "light-green",
          variants: [
            {
              name: "50",
              variant: "#f1f8e9",
            },
            {
              name: "100",
              variant: "#dcedc8",
            },
            {
              name: "200",
              variant: "#c5e1a5",
            },
            {
              name: "300",
              variant: "#aed581",
            },
            {
              name: "400",
              variant: "#9ccc65",
            },
            {
              name: "500",
              variant: "#8bc34a",
            },
            {
              name: "600",
              variant: "#7cb342",
            },
            {
              name: "700",
              variant: "#689f38",
            },
            {
              name: "800",
              variant: "#558b2f",
            },
            {
              name: "900",
              variant: "#33691e",
            },
            {
              name: "a100",
              variant: "#ccff90",
            },
            {
              name: "a200",
              variant: "#b2ff59",
            },
            {
              name: "a400",
              variant: "#76ff03",
            },
            {
              name: "a700",
              variant: "#64dd17",
            },
          ],
        },
        {
          name: "lime",
          variants: [
            {
              name: "50",
              variant: "#f9fbe7",
            },
            {
              name: "100",
              variant: "#f0f4c3",
            },
            {
              name: "200",
              variant: "#e6ee9c",
            },
            {
              name: "300",
              variant: "#dce775",
            },
            {
              name: "400",
              variant: "#d4e157",
            },
            {
              name: "500",
              variant: "#cddc39",
            },
            {
              name: "600",
              variant: "#c0ca33",
            },
            {
              name: "700",
              variant: "#afb42b",
            },
            {
              name: "800",
              variant: "#9e9d24",
            },
            {
              name: "900",
              variant: "#827717",
            },
            {
              name: "a100",
              variant: "#f4ff81",
            },
            {
              name: "a200",
              variant: "#eeff41",
            },
            {
              name: "a400",
              variant: "#c6ff00",
            },
            {
              name: "a700",
              variant: "#aeea00",
            },
          ],
        },
        {
          name: "yellow",
          variants: [
            {
              name: "50",
              variant: "#fffde7",
            },
            {
              name: "100",
              variant: "#fff9c4",
            },
            {
              name: "200",
              variant: "#fff59d",
            },
            {
              name: "300",
              variant: "#fff176",
            },
            {
              name: "400",
              variant: "#ffee58",
            },
            {
              name: "500",
              variant: "#ffeb3b",
            },
            {
              name: "600",
              variant: "#fdd835",
            },
            {
              name: "700",
              variant: "#fbc02d",
            },
            {
              name: "800",
              variant: "#f9a825",
            },
            {
              name: "900",
              variant: "#f57f17",
            },
            {
              name: "a100",
              variant: "#ffff8d",
            },
            {
              name: "a200",
              variant: "#ffff00",
            },
            {
              name: "a400",
              variant: "#ffea00",
            },
            {
              name: "a700",
              variant: "#ffd600",
            },
          ],
        },
        {
          name: "amber",
          variants: [
            {
              name: "50",
              variant: "#fff8e1",
            },
            {
              name: "100",
              variant: "#ffecb3",
            },
            {
              name: "200",
              variant: "#ffe082",
            },
            {
              name: "300",
              variant: "#ffd54f",
            },
            {
              name: "400",
              variant: "#ffca28",
            },
            {
              name: "500",
              variant: "#ffc107",
            },
            {
              name: "600",
              variant: "#ffb300",
            },
            {
              name: "700",
              variant: "#ffa000",
            },
            {
              name: "800",
              variant: "#ff8f00",
            },
            {
              name: "900",
              variant: "#ff6f00",
            },
            {
              name: "a100",
              variant: "#ffe57f",
            },
            {
              name: "a200",
              variant: "#ffd740",
            },
            {
              name: "a400",
              variant: "#ffc400",
            },
            {
              name: "a700",
              variant: "#ffab00",
            },
          ],
        },
        {
          name: "orange",
          variants: [
            {
              name: "50",
              variant: "#fff3e0",
            },
            {
              name: "100",
              variant: "#ffe0b2",
            },
            {
              name: "200",
              variant: "#ffcc80",
            },
            {
              name: "300",
              variant: "#ffb74d",
            },
            {
              name: "400",
              variant: "#ffa726",
            },
            {
              name: "500",
              variant: "#ff9800",
            },
            {
              name: "600",
              variant: "#fb8c00",
            },
            {
              name: "700",
              variant: "#f57c00",
            },
            {
              name: "800",
              variant: "#ef6c00",
            },
            {
              name: "900",
              variant: "#e65100",
            },
            {
              name: "a100",
              variant: "#ffd180",
            },
            {
              name: "a200",
              variant: "#ffab40",
            },
            {
              name: "a400",
              variant: "#ff9100",
            },
            {
              name: "a700",
              variant: "#ff6d00",
            },
          ],
        },
        {
          name: "deep-orange",
          variants: [
            {
              name: "50",
              variant: "#fbe9e7",
            },
            {
              name: "100",
              variant: "#ffccbc",
            },
            {
              name: "200",
              variant: "#ffab91",
            },
            {
              name: "300",
              variant: "#ff8a65",
            },
            {
              name: "400",
              variant: "#ff7043",
            },
            {
              name: "500",
              variant: "#ff5722",
            },
            {
              name: "600",
              variant: "#f4511e",
            },
            {
              name: "700",
              variant: "#e64a19",
            },
            {
              name: "800",
              variant: "#d84315",
            },
            {
              name: "900",
              variant: "#bf360c",
            },
            {
              name: "a100",
              variant: "#ff9e80",
            },
            {
              name: "a200",
              variant: "#ff6e40",
            },
            {
              name: "a400",
              variant: "#ff3d00",
            },
            {
              name: "a700",
              variant: "#dd2c00",
            },
          ],
        },
        {
          name: "brown",
          variants: [
            {
              name: "50",
              variant: "#efebe9",
            },
            {
              name: "100",
              variant: "#d7ccc8",
            },
            {
              name: "200",
              variant: "#bcaaa4",
            },
            {
              name: "300",
              variant: "#a1887f",
            },
            {
              name: "400",
              variant: "#8d6e63",
            },
            {
              name: "500",
              variant: "#795548",
            },
            {
              name: "600",
              variant: "#6d4c41",
            },
            {
              name: "700",
              variant: "#5d4037",
            },
            {
              name: "800",
              variant: "#4e342e",
            },
            {
              name: "900",
              variant: "#3e2723",
            },
          ],
        },
        {
          name: "grey",
          variants: [
            {
              name: "50",
              variant: "#fafafa",
            },
            {
              name: "100",
              variant: "#f5f5f5",
            },
            {
              name: "200",
              variant: "#eeeeee",
            },
            {
              name: "300",
              variant: "#e0e0e0",
            },
            {
              name: "400",
              variant: "#bdbdbd",
            },
            {
              name: "500",
              variant: "#9e9e9e",
            },
            {
              name: "600",
              variant: "#757575",
            },
            {
              name: "700",
              variant: "#616161",
            },
            {
              name: "800",
              variant: "#424242",
            },
            {
              name: "900",
              variant: "#212121",
            },
          ],
        },
        {
          name: "blue-grey",
          variants: [
            {
              name: "50",
              variant: "#eceff1",
            },
            {
              name: "100",
              variant: "#cfd8dc",
            },
            {
              name: "200",
              variant: "#b0bec5",
            },
            {
              name: "300",
              variant: "#90a4ae",
            },
            {
              name: "400",
              variant: "#78909c",
            },
            {
              name: "500",
              variant: "#607d8b",
            },
            {
              name: "600",
              variant: "#546e7a",
            },
            {
              name: "700",
              variant: "#455a64",
            },
            {
              name: "800",
              variant: "#37474f",
            },
            {
              name: "900",
              variant: "#263238",
            },
            {
              name: "1000",
              variant: "#11171a",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getFontColor(variant) {
      if (
        [
          "50",
          "100",
          "200",
          "300",
          "400",
          "500",
          "a100",
          "a200",
          "a400",
          "a700",
        ].includes(variant)
      ) {
        return "#000";
      } else {
        return "#fff";
      }
    },
  },
};
</script>
