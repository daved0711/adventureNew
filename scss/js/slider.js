var slider = tns({
  container: ".connect__slider",
  items: 1,
  speed: 200,
  slideBy: "1",
  autplay: false,
  navPosition: "bottom",
  containerControls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  responsive: {
    1250: {
      items: 6,
    },
    200: {
      items: 2,
    },
  },
});
