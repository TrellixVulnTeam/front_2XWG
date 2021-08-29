import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      graphStructure: {},
      selectedNodeInformation: {},
    };
  },
  mutations: {
    setGraphStructure(state, graphStructure) {
      state.graphStructure = graphStructure;
    },
    setSelectedNodeInformation(state, selectedNodeInformation) {
      state.selectedNodeInformation = selectedNodeInformation;
    },
  },
  actions: {
    getGraphStructure(context) {
      fetch("https://b309-109-252-80-60.ngrok.io/org-structure", {
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("setGraphStructure", data);
        });
    },
    getDataCard(context, id) {
      fetch(`https://b309-109-252-80-60.ngrok.io/card/${id}`, {
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          context.commit("setSelectedNodeInformation", data);
        });
    },
  },
});

export default store;
