export function generateOrgChartData() {
  const data = {
    id: 1,
    name: "Lao Lao",
    title: "general manager",
    percentEnergy: 30,
    children: [
      {
        id: 2,
        name: "Bo Miao",
        title: "department manager",
        percentEnergy: 40,
      },
      {
        id: 3,
        name: "Su Miao",
        title: "department manager",
        percentEnergy: 50,
        children: [
          {
            id: 4,
            name: "Tie Hua",
            title: "senior engineer",
            percentEnergy: 33,
          },
          {
            id: 5,
            name: "Графов Иван Анатольевиv",
            title: "ИнжDFFDFDFFDFDFDFFDF DFCFDFDFDF енер",
            percentEnergy: 10,
            children: [
              {
                id: 6,
                name: "Pang Pang",
                title: "engineer",
                percentEnergy: 75,
              },
              {
                id: 7,
                name: "Xiang Xiang",
                title: "UE engineer",
                percentEnergy: 60,
              },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "Hong Miao",
        title: "department manager",
        percentEnergy: 80,
      },
    ],
  };
  return data;
}
export function generateOrgChartDataFolded(depth, foldDepth) {
  const data = this.generateOrgChartData();
  let tempNode = data;
  for (let i = 0; i < foldDepth && tempNode.children; i++) {
    tempNode = tempNode.children[0];
  }
  tempNode._children = tempNode.children;
  tempNode.children = null;
  return data;
}
