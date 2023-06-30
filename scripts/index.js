console.log("Hello World");



let player = document.getElementById("lottiePlayer_RandomAnim");

player.addEventListener("ready", () => {
  LottieInteractivity.create({
        mode:"scroll",
        player: "#lottiePlayer_RandomAnim",
        actions: [
        {
            visibility:[0.15, 1.0],
            type: "seek",
            frames: [0, 70],
        },
        ]
      });
});