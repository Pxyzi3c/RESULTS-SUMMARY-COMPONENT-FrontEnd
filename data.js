const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

  const category = document.querySelectorAll(".label p");
  const score = document.querySelectorAll(".data .score");
  const icon = document.querySelectorAll(".label img");

  data.forEach((item, index) => {
    category[index].textContent = item.category;
    score[index].textContent = item.score;
    icon[index].src = item.icon;
  });