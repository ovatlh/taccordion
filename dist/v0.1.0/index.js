const id_List = [
  "t-accordion-01",
  "t-accordion-02",
  "t-accordion-03",
  "t-accordion-04",
  "t-accordion-card-01",
  "t-accordion-card-02",
  "t-accordion-card-03",
  "t-accordion-nested-01",
  "t-accordion-nested-02",
  "t-accordion-nested-03",
  "t-accordion-nested-level-01",
];

function fn_close_all() {
  id_List.forEach((id) => {
    taccordion.fnClose(id);
  });
}

function fn_open_all() {
  id_List.forEach((id) => {
    taccordion.fnOpen(id);
  });
}
