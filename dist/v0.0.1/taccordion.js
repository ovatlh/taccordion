var taccordion=taccordion||(function () {
  function fnClose(id = "") {
    try {
      const id_DOM = document.getElementById(id);
      if(!id_DOM) {
        return;
      }
      id_DOM.classList.remove("is-open");
    } catch (error) {
      console.error(error);
    }
  }

  function fnOpen(id = "") {
    try {
      const id_DOM = document.getElementById(id);
      if(!id_DOM) {
        return;
      }
      id_DOM.classList.add("is-open");
    } catch (error) {
      console.error(error);
    }
  }

  function fnToggle(id = "") {
    try {
      const id_DOM = document.getElementById(id);
      if(!id_DOM) {
        return;
      }
      id_DOM.classList.toggle("is-open");
    } catch (error) {
      console.error(error);
    }
  }

  return {
    fnClose,
    fnOpen,
    fnToggle,
  }
})();
