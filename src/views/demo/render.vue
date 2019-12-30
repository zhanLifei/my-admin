<script>
export default {
  render: h => {
    return h(
      "div",
      {
        style: {
          height: "79px",
          display: "inline-block",
          margin: "0 15px 10px 0"
        }
      },
      [
        h("img", {
          attrs: {
            src:
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg",
            width: 70,
            height: 40
          }
        }),
        h(
          "p",
          {
            style: {
              color: "#333",
              margin: 0,
              width: "88px"
            }
          },
          "name"
        ),
        h(
          "p",
          {
            style: {
              color: "#999",
              margin: 0,
              width: "88px"
            }
          },
          "age"
        )
      ]
    );
  },
};
</script>

<style>
</style>
